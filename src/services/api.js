import axios from 'axios';

const API_KEY = 'a97f5a48286213b4292b81d1cb5cf0d2';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const searchPopularMovies = async (params = {}, signal) => {
  console.log(signal);
  const response = await axios.get('trending/movie/day', {
    params: {
      page: 1,
      api_key: API_KEY,
      ...params,
    },
    signal,
  });
  return response.data.results;
};

export const searchMoviesByQuery = async (searchQuery, signal) => {
  const response = await axios.get('search/movie', {
    params: {
      query: searchQuery,
      api_key: API_KEY,
    },
    signal,
  });
  return response.data.results;
};

export const searchMoviesDetails = async (movieId, signal) => {
  const response = await axios.get(`movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
    signal,
  });
  return response.data;
};

export const searchMovieCast = async (movieId, signal) => {
  const response = await axios.get(`movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
    signal,
  });
  return response.data.cast;
};

export const searchMovieReviews = async (movieId, signal) => {
  const response = await axios.get(`movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
    signal,
  });
  return response.data.results;
};
