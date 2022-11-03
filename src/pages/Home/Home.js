import { controller, searchPopularMovies } from 'api';
import { useState, useEffect } from 'react';

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
    <div>
      Home
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            {movie.id}
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
