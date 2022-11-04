import { searchMoviesByQuery } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchQuery, setsearchQuery] = useState('');
  //   const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handleInputSubmit = e => {
    e.preventDefault();
    setsearchQuery(query.trim());
  };

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    const fetchMoviesByQuery = async () => {
      try {
        const fetchedMovies = await searchMoviesByQuery(searchQuery);
        console.log(fetchedMovies);
        setMovies(fetchedMovies);
      } catch (e) {
        console.log(e);
        // throw e;
      } finally {
      }
    };

    fetchMoviesByQuery();
  }, [searchQuery]);

  return (
    <main>
      <form onSubmit={handleInputSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies} />
      {/* <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            {movie.id}
            {movie.title}
          </li>
        ))}
      </ul> */}
    </main>
  );
};
