import axios from 'axios';

const API_KEY = 'a97f5a48286213b4292b81d1cb5cf0d2';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// export const controller = new AbortController();

export const searchPopularMovies = async () => {
  const response = await axios.get('trending/movie/day', {
    // signal: controller.signal,
    params: {
      page: 1,
      api_key: API_KEY,
    },
  });
  console.log(response.data.results);
  return response.data.results;
};
