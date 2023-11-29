import React, { useState, useEffect } from 'react';
import { useContext } from "react";
import { context } from '../../context/context'
import plantsData from './api.js'; // Importar los datos de 'api.js'

export const Plants = () => {
  const { user } = useContext(context);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedPlants, setSelectedPlants] = useState([]);

  useEffect(() => {
    // Función para cargar las plantas del usuario
    const loadUserPlants = async () => {
      try {
        const response = await fetch(`https://apimas.onrender.com/getUserPlants?usuario=${user}`, {
          method: 'GET'
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const plants = await response.json();
        setSelectedPlants(plants); // Actualizar el estado con las plantas cargadas
      } catch (error) {
        console.error('Error al cargar las plantas:', error);
      }
    };

    loadUserPlants();
  }, [user]);

  const searchPlants = (searchQuery) => {
    const filteredData = plantsData.filter(plant =>
      plant.nombre.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filteredData);
  };

  const addPlant = async (plant) => {
    lastWateredTime = new Date().toISOString()

    // Datos a enviar
    const dataToSend = {
      usuario: user,
      nombre: plant.nombre,
      frecuenciaRiego: plant.frecuenciaRiego,
      descripcion: plant.descripcion,
      recomendaciones: plant.recomendaciones,
      lastWateredTime: lastWateredTime
    };
  
    // Petición POST al endpoint de la API
    try {
      const response = await fetch('https://apimas.onrender.com/addPlant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend)
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Planta guardada con éxito:', result);

      const newPlant = {
        ...plant,
        lastWateredTime:  lastWateredTime, // Tiempo actual,
        id: result.plant_id
      };

      // Agregar la planta a la tabla
      setSelectedPlants(prevSelectedPlants => [...prevSelectedPlants, newPlant]);
    } catch (error) {
      console.error('Error al guardar la planta:', error);
    }

  };

  const calculateTimeLeftToWater = (lastWateredTime, wateringFrequency) => {
    const lastWatered = new Date(lastWateredTime).getTime();
    const now = new Date().getTime();
    const nextWatering = lastWatered + wateringFrequency * 60 * 60 * 1000; // Convertir horas a milisegundos
    const timeLeft = nextWatering - now;
    return Math.max(Math.floor(timeLeft / 60000), 0); // Convertir milisegundos a minutos y evitar números negativos
  };

  const removePlant = async (plantId, index) => {

      // Datos a enviar
      const dataToSend = {
        plantId: plantId,
      };

    try {
      const response = await fetch(`https://apimas.onrender.com/removePlant`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Si la planta se elimina correctamente en el backend, actualizar el estado
      setSelectedPlants(prevSelectedPlants =>
        prevSelectedPlants.filter((_, i) => i !== index)
      );
  
      console.log('Planta eliminada con éxito');
    } catch (error) {
      console.error('Error al eliminar la planta:', error);
    }
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (query) {
        searchPlants(query);
      } else {
        setResults([]);
      }
    }, 500);

    return () => clearTimeout(timerId);
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar plantas..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        {results.map((plant, index) => (
          <div key={index} className="result-item">
            {plant.nombre}
            <button onClick={() => addPlant(plant)}>+</button>
          </div>
        ))}
      </div>
      <div>
        <h3>Tabla de Plantas Seleccionadas</h3>
        <table className="crud-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Frecuencia de Riego</th>
              <th>Descripción</th>
              <th>Recomendaciones</th>
              <th>Tiempo restante para regar (minutos)</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {selectedPlants.map((plant, index) => (
              <tr key={index}>
                <td>{plant.id}</td>
                <td>{plant.frecuenciaRiego} horas</td>
                <td>{plant.descripcion}</td>
                <td>{plant.recomendaciones}</td>
                <td>
                  {calculateTimeLeftToWater(plant.lastWateredTime, plant.frecuenciaRiego)}
                </td>
                <td>
                  <button onClick={() => removePlant(plant.id, index)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style jsx>{`
        .result-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5px;
        }

        .crud-table {
          width: 100%;
          border-collapse: collapse;
        }

        .crud-table th, .crud-table td {
          border: 1px solid #ddd;
          padding: 8px;
        }

        .crud-table th {
          text-align: left;
          background-color: #f2f2f2;
        }

        .crud-table tr:nth-child(even){background-color: #f2f2f2;}

        .crud-table tr:hover {background-color: #ddd;}
      `}</style>
    </div>
  );
};
