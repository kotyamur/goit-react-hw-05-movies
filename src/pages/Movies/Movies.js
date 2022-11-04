import { searchMoviesByQuery } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { Layout } from './Movies.styled';

export const Movies = () => {
  const [searchQuery, setsearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSubmit = query => {
    setsearchQuery(query);
  };

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    const fetchMoviesByQuery = async () => {
      try {
        const fetchedMovies = await searchMoviesByQuery(searchQuery);
        console.log(fetchedMovies);
        setMovies(fetchedMovies);
      } catch (e) {
        console.log(e);
        // throw e;
      } finally {
      }
    };

    fetchMoviesByQuery();
  }, [searchQuery]);

  return (
    <Layout>
      <SearchForm onSubmit={handleSubmit} />
      <MoviesList movies={movies} />
    </Layout>
  );
};
