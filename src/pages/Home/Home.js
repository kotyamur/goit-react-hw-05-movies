import { searchPopularMovies } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { Layout, Header } from './Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const fetchedPopularMovies = await searchPopularMovies();
        console.log(fetchedPopularMovies);
        setMovies(fetchedPopularMovies);
      } catch (e) {
        console.log(e);
        // throw e;
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
      <MoviesList movies={movies} />
    </Layout>
  );
};
