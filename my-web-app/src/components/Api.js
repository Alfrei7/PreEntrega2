
import axios from 'axios';

const apiKey = '8568c4943c68b4b00e3cbd6535315173'; 

const getPopularMovies = async () => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=1`);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export { getPopularMovies };