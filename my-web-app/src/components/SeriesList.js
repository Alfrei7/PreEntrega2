import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SeriesList() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
   
    const apiKey = '8568c4943c68b4b00e3cbd6535315173';

    axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`)
      .then((response) => {
        setSeries(response.data.results);
      })
      .catch((error) => {
        console.error('Error al obtener series:', error);
      });
  }, []);

  return (
    <div>
      <h1>Series Populares</h1>
      <ul>
        {series.map((serie) => (
          <li key={serie.id}>{serie.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SeriesList;