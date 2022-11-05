import { searchPopularMovies } from 'api';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { Layout, Header } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      setIsLoading(true);
      try {
        const fetchedPopularMovies = await searchPopularMovies();
        setMovies(fetchedPopularMovies);
      } catch (e) {
        setError("We couldn't find popular movies :( Please reload the page!");
      } finally {
        setIsLoading(false);
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
      <Loader isLoading={isLoading} />
      {error && <p>{error}</p>}
      <MoviesList movies={movies} />
    </Layout>
  );
};

export default Home;
