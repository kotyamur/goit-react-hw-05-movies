import { searchMoviesDetails } from 'api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      try {
        const movieInfo = await searchMoviesDetails(movieId);
        console.log(movieInfo);
        setMovie(movieInfo);
      } catch (e) {
        console.log(e);
        // throw e;
      } finally {
      }
    };
    fetchMoviesDetails();
  }, [movieId]);

  let url = 'https://image.tmdb.org/t/p/w500/';

  return (
    <>
      {movie && (
        <div>
          Now showing product with id - {movieId}
          <img src={url + movie.poster_path} alt={movie.original_title} />
          <p>
            {movie.title} ({String(movie.release_date).slice(0, 4)})
          </p>
          <p>User Score: {movie.popularity}%</p>
          <p>Overviev</p>
          <p>{movie.overview}</p>
          <p>Genres</p>
          <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
        </div>
      )}
    </>
  );
};
