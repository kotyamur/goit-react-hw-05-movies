import { Suspense, useState, useEffect } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { Layout } from './MovieDetails.styled';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { NavToAdditionalInfo } from 'components/NavToAdditionalInfo/NavToAdditionalInfo';
import { BackLink } from 'components/BackLink/BackLink';
import { Loader } from 'components/Loader/Loader';
import { searchMoviesDetails } from 'api';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      setIsLoading(true);
      try {
        const movieById = await searchMoviesDetails(movieId);
        setMovie(movieById);
      } catch (e) {
        setError("We didn't find any information about this movie.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesDetails();
  }, [movieId]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  return (
    <main>
      <Loader isLoading={isLoading} />
      {error && <p>{error}</p>}
      {movie && (
        <Layout>
          <BackLink to={backLinkHref}>Go back</BackLink>
          <MovieInfo movie={movie} />
          <NavToAdditionalInfo />
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </Layout>
      )}
    </main>
  );
};

export default MovieDetails;
