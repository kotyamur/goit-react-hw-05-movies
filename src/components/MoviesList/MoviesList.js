import { Link, useLocation } from 'react-router-dom';
import { Layout, Text } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Layout>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <Text>{movie.title}</Text>
          </Link>
        </li>
      ))}
    </Layout>
  );
};
