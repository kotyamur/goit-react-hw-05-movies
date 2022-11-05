import { searchPopularMovies } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { Layout, Header } from './Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const fetchedPopularMovies = await searchPopularMovies();
        setMovies(fetchedPopularMovies);
      } catch (e) {
        setError("We couldn't find popular movies :( Please reload the page!");
      } finally {
      }
    };

    fetchPopularMovies();
    // return () => {
    //   controller.abort();
    // };
  }, []);

  return (
    <Layout>
      <Header>Trending today</Header>
      {error && <p>{error}</p>}
      <MoviesList movies={movies} />
    </Layout>
  );
};
