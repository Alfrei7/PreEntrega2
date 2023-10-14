import React, { useEffect, useState } from 'react';
import { getPopularMovies } from './Api';

function Peliculas() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then((data) => setPeliculas(data))
      .catch((error) => console.error('Error al obtener películas:', error));
  }, []);

  return (
    <div>
      <h2>Películas </h2>
      <ul>
        {peliculas.map((pelicula) => (
          <li key={pelicula.id}>
            <h3>{pelicula.title}</h3>
            <p>{pelicula.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Peliculas;