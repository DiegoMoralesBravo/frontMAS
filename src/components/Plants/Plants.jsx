import React, { useState, useEffect } from 'react';

export const Plants = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // Datos de prueba
  const mockData = [
    'Rosa',
    'Tulipán',
    'Girasol',
    'Orquídea',
    'Margarita',
    'Clavel'
  ];

  const searchPlants = (searchQuery) => {
    // Filtra los datos de prueba para simular una búsqueda
    const filteredData = mockData.filter(plant =>
      plant.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filteredData);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (query) {
        searchPlants(query);
      } else {
        setResults([]);
      }
    }, 500); // Tiempo de espera de 500ms

    return () => clearTimeout(timerId); // Limpia el temporizador al desmontar
  }, [query]);
  return (
    <>
      <div className='index-container'>
        <div className='data-container'>
          <div className='text-container'>
            <h1>Plants</h1>
          </div>
          <div className='form-container'>
            <input
              type="text"
              placeholder="Buscar plantas..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div>
              {results.map((plant, index) => (
                <div key={index}>{plant}</div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
