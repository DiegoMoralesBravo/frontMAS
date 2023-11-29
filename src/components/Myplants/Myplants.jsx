import React, { useState } from 'react';
import image from '../../image/helecho.jpg';

export const Myplants = () => {
  
  const [searchTerm, setSearchTerm] = useState('');

const handleSearch = async () => {
    if (searchTerm) {
      try {
        const response = await fetch('https://trefle.io/api/v1/plants?token=Uxx3fDVTse2AKtHl00gf7NIHl4v3_WfBBuu2ohIQmaU');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
        // Puedes manejar la data aquí, como establecerla en un estado o mostrarla en el UI
      } catch (error) {
        console.error('Hubo un error con la petición:', error);
      }
    }
}

  return (
    <>
      <div className='index-container'>
        <div className='data-container'>
          <div className='text-container'>
            <h1>My plants</h1>
            <div className="search-bar" style={{ marginTop: '10px' }}>
              <input 
                type="text" 
                placeholder="Search your plants..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch();
                  }
                }}
                style={{
                  width: '80%', 
                  padding: '8px 12px', 
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f5f5f5',
                  color: '#333'
                }}
              />
            </div>
          </div>
        </div>
        <div className='preview-image'>
          <img className='main-image' src={image} alt="Plant" style={{ width: '300px', height: '300px' }}/>
        </div>
      </div>
    </>
  );
}
