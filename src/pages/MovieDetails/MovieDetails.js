import { searchMoviesDetails } from 'api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Layout } from './MovieDetails.styled';
import { Outlet } from 'react-router-dom';
import { NavToAdditionalInfo } from 'components/NavToAdditionalInfo/NavToAdditionalInfo';
import { BackLink } from 'components/BackLink/BackLink';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      try {
        const movieById = await searchMoviesDetails(movieId);
        setMovie(movieById);
      } catch (e) {
        setError("We didn't find any information about this movie.");
      } finally {
      }
    };
    fetchMoviesDetails();
  }, [movieId]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  return (
    <main>
      {error && <p>{error}</p>}
      {movie && (
        <Layout>
          <BackLink to={backLinkHref}>Go back</BackLink>
          <MovieInfo movie={movie} />
          <NavToAdditionalInfo />
          <Outlet />
        </Layout>
      )}
    </main>
  );
};
