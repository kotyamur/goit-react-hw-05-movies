import { searchMoviesDetails } from 'api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from './MovieDetails.styled';
import { Link, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      try {
        const movieById = await searchMoviesDetails(movieId);
        console.log(movieById);
        setMovie(movieById);
      } catch (e) {
        console.log(e);
        // throw e;
      } finally {
      }
    };
    fetchMoviesDetails();
  }, [movieId]);

  return (
    <main>
      {movie && (
        <Layout>
          <MovieInfo movie={movie} />
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </Layout>
      )}
    </main>
  );
};
