import { searchPopularMovies } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
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
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
      {/* <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            {movie.id}
            {movie.title}
          </li>
        ))}
      </ul> */}
    </div>
  );
};
