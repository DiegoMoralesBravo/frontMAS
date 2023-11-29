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
    // Agregar la planta a la tabla
    setSelectedPlants(prevSelectedPlants => [...prevSelectedPlants, plant]);
  
    // Datos a enviar
    const dataToSend = {
      usuario: user,
      nombre: plant.nombre,
      frecuenciaRiego: plant.frecuenciaRiego,
      descripcion: plant.descripcion,
      recomendaciones: plant.recomendaciones
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
    } catch (error) {
      console.error('Error al guardar la planta:', error);
    }
  };

  const removePlant = (index) => {
    setSelectedPlants(prevSelectedPlants =>
      prevSelectedPlants.filter((_, i) => i !== index)
    );
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
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {selectedPlants.map((plant, index) => (
              <tr key={index}>
                <td>{plant.nombre}</td>
                <td>{plant.frecuenciaRiego} horas</td>
                <td>{plant.descripcion}</td>
                <td>{plant.recomendaciones}</td>
                <td>
                  <button onClick={() => removePlant(index)}>Eliminar</button>
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
