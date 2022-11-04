import { Link } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <span>{movie.id}</span>
            <p>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
