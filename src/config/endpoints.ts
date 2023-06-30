const API_ACCESS_TOKEN = import.meta.env.VITE_API_ACCESS_TOKEN;

const BASE_URL = 'https://api.themoviedb.org/3';

const endPoints = {
  fetchTrending: `/trending/movie/week?language=en-US`,
  fetchNetflixOriginals: `/discover/movie?include_adult=false&include_video=true&language=en-US&page=`,
  fetchTopRated: `/movie/top_rated?language=en-US&page=`,
  fetchActionMovies: `/discover/movie?with_genres=28&language=en-US&page=`,
  fetchComedyMovies: `/discover/movie?with_genres=35&language=en-US&page=`,
};

export { API_ACCESS_TOKEN, BASE_URL, endPoints };
