import { Link } from 'react-router-dom';
import { Layout, Text } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <Layout>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <Text>{movie.title}</Text>
          </Link>
        </li>
      ))}
    </Layout>
  );
};
