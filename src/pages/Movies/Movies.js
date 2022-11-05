import { searchMoviesByQuery } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from './Movies.styled';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [error, setError] = useState(null);

  const handleSubmit = query => {
    const nextQuery = query !== '' ? { query } : {};
    setSearchParams(nextQuery);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    const fetchMoviesByQuery = async () => {
      try {
        const fetchedMovies = await searchMoviesByQuery(query);
        setMovies(fetchedMovies);
        setError(
          fetchedMovies.length === 0
            ? "We didn't find any movie for this query."
            : null
        );
      } catch (e) {
        setError("We didn't find any movie for this query.");
      } finally {
      }
    };

    fetchMoviesByQuery();
  }, [query]);

  return (
    <Layout>
      <SearchForm onSubmit={handleSubmit} />
      {error && <p>{error}</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </Layout>
  );
};
