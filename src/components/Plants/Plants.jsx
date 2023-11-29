import React, { useState, useEffect } from 'react';


export const Plants = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedPlants, setSelectedPlants] = useState([]);

  // Datos de prueba ampliados
  const mockData = [
    'Rosa', 'Tulipán', 'Girasol', 'Orquídea', 'Margarita', 'Clavel',
    'Lavanda', 'Azalea', 'Begonia', 'Cala', 'Dalia', 'Ébano',
    'Fresia', 'Geranio', 'Hortensia', 'Iris', 'Jazmín', 'Kalanchoe',
    'Lirio', 'Magnolia', 'Narciso', 'Olivo', 'Petunia', 'Quinoa',
    'Rododendro', 'Salvia', 'Tomillo', 'Uva', 'Verbena', 'Wisteria',
    'Xerochrysum', 'Yucca', 'Zinnia', 'Aloe', 'Bonsái', 'Cactus',
    'Drácena', 'Eucalipto', 'Ficus', 'Ginkgo', 'Helecho', 'Ivy',
    'Junípero', 'Kiri', 'Laurel', 'Mimosa', 'Nogal', 'Olmo',
    'Pino', 'Quercus', 'Roble', 'Secuoya', 'Tejo', 'Ulmo',
    'Violeta', 'Weigela', 'Xanthoceras', 'Yew', 'Zamia'
  ];

  const searchPlants = (searchQuery) => {
    const filteredData = mockData.filter(plant =>
      plant.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filteredData);
  };

  const addPlant = (plant) => {
    setSelectedPlants(prevSelectedPlants => [...prevSelectedPlants, plant]);
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
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {plant}
            <button onClick={() => addPlant(plant)}>+</button>
          </div>
        ))}
      </div>
      <div>
        <h3>Plantas seleccionadas:</h3>
        <ul>
          {selectedPlants.map((plant, index) => (
            <li key={index}>{plant}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlantSearch;

