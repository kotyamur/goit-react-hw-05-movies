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
  return response.data.results;
};

export const searchMoviesByQuery = async (searchQuery, page = 1) => {
  const response = await axios.get('search/movie', {
    params: {
      page: page,
      query: searchQuery,
      api_key: API_KEY,
    },
  });
  return response.data.results;
};

export const searchMoviesDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const searchMovieCast = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.cast;
};

export const searchMovieReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
};
