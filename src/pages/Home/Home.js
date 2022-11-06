import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useRequest } from 'hooks/useRequest';
import { searchPopularMovies } from 'services/api';
import { Layout, Header } from './Home.styled';

const Home = () => {
  const [movies, error, isLoading] = useRequest(searchPopularMovies);

  return (
    <Layout>
      <Header>Trending today</Header>
      <Loader isLoading={isLoading} />
      {error && <p>{error}</p>}
      {movies && <MoviesList movies={movies} />}
    </Layout>
  );
};

export default Home;
