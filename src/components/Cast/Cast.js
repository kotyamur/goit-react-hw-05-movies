import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMoviesCast } from 'api';

export const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMoviesCast = async () => {
      try {
        const filmCast = await searchMoviesCast(movieId);
        console.log(filmCast);
        setMovieCast(filmCast);
      } catch (e) {
        console.log(e);
        // throw e;
      } finally {
      }
    };
    fetchMoviesCast();
  }, [movieId]);

  let url = 'https://image.tmdb.org/t/p/w500/';

  return (
    <div>
      Cast
      <ul>
        {movieCast.map(movie => {
          return (
            <li>
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
