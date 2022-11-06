import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useRequest } from 'hooks/useRequest';
import { useSearchParams } from 'react-router-dom';
import { Layout } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleSubmit = query => {
    const nextQuery = query !== '' ? { query } : {};
    setSearchParams(nextQuery);
  };

  const [movies, error, isLoading] = useRequest('searchMoviesByQuery', query);

  return (
    <Layout>
      <SearchForm onSubmit={handleSubmit} />
      <Loader isLoading={isLoading} />
      {error && <p>{error}</p>}
      {movies?.length === 0 && <p>We didn't find any movie for this query.</p>}
      {movies?.length > 0 && <MoviesList movies={movies} />}
    </Layout>
  );
};

export default Movies;
