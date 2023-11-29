import React, { useState, useEffect } from 'react';
import { useContext } from "react";
import { context } from '../../context/context'
import plantsData from './api.js'; // Importar los datos de 'api.js'

export const Plants = () => {
  const { user } = useContext(context);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedPlants, setSelectedPlants] = useState([]);

  console.log(user)

  const searchPlants = (searchQuery) => {
    const filteredData = plantsData.filter(plant =>
      plant.nombre.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filteredData);
  };

  const addPlant = (plant) => {
    setSelectedPlants(prevSelectedPlants => [...prevSelectedPlants, plant]);
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
