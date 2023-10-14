import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    
    const apiKey = '8568c4943c68b4b00e3cbd6535315173';

    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error('Error al obtener películas:', error);
      });
  }, []);

  return (
    <div>
      <h1>Películas Populares</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;       