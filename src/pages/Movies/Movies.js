import { searchMoviesByQuery } from 'api';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from './Movies.styled';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleSubmit = query => {
    const nextQuery = query !== '' ? { query } : {};
    setSearchParams(nextQuery);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    const fetchMoviesByQuery = async () => {
      setIsLoading(true);
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
        setIsLoading(false);
      }
    };

    fetchMoviesByQuery();
  }, [query]);

  return (
    <Layout>
      <SearchForm onSubmit={handleSubmit} />
      <Loader isLoading={isLoading} />
      {error && <p>{error}</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </Layout>
  );
};
