import { Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { Layout } from './MovieDetails.styled';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { NavToAdditionalInfo } from 'components/NavToAdditionalInfo/NavToAdditionalInfo';
import { BackLink } from 'components/BackLink/BackLink';
import { Loader } from 'components/Loader/Loader';
import { useRequest } from 'hooks/useRequest';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, error, isLoading] = useRequest('searchMoviesDetails', movieId);

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
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Layout>
      )}
    </main>
  );
};

export default MovieDetails;
