import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DocumentariesList() {
  const [documentaries, setDocumentaries] = useState([]);

  useEffect(() => {
   
    const apiKey = '8568c4943c68b4b00e3cbd6535315173';

    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=99`)
      .then((response) => {
        setDocumentaries(response.data.results);
      })
      .catch((error) => {
        console.error('Error al obtener documentales:', error);
      });
  }, []);

  return (
    <div>
      <h1>Documentales</h1>
      <ul>
        {documentaries.map((documentary) => (
          <li key={documentary.id}>{documentary.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DocumentariesList;