import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMovieCast } from 'api';

export const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const filmCast = await searchMovieCast(movieId);
        console.log(filmCast);
        setMovieCast(filmCast);
      } catch (e) {
        console.log(e);
        // throw e;
      } finally {
      }
    };
    fetchMovieCast();
  }, [movieId]);

  let url = 'https://image.tmdb.org/t/p/w500/';

  return (
    <div>
      Cast
      <ul>
        {movieCast.map(movie => {
          return (
            <li key={movie.id}>
              <img src={url + movie.profile_path} alt={movie.original_name} />
              <p>{movie.name}</p>
              <p>Character: {movie.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
