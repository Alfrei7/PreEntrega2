import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ReviewsList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
   
    const apiKey = '8568c4943c68b4b00e3cbd6535315173';

    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`)
      .then((response) => {
        setReviews(response.data.results);
      })
      .catch((error) => {
        console.error('Error al obtener reseñas:', error);
      });
  }, []);

  return (
    <div>
      <h1>Reseñas</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>{review.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewsList;