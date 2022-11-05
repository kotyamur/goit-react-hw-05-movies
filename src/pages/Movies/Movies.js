import { searchMoviesByQuery } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from './Movies.styled';

export const Movies = () => {
  // const [searchQuery, setsearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleSubmit = query => {
    // setsearchQuery(query);
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
        console.log(fetchedMovies);
        setMovies(fetchedMovies);
      } catch (e) {
        console.log(e);
        // throw e;
      } finally {
      }
    };

    fetchMoviesByQuery();
  }, [query]);

  return (
    <Layout>
      <SearchForm onSubmit={handleSubmit} />
      {/* {movies.length === 0 && <p>We didn't find any movie for this query.</p>} */}
      {movies.length > 0 && <MoviesList movies={movies} />}
      {/* <MoviesList movies={movies} /> */}
    </Layout>
  );
};
