import { searchMoviesDetails } from 'api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from './MovieDetails.styled';

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
    <>
      {movie && (
        <Layout>
          Now showing product with id - {movieId}
          <MovieInfo movie={movie} />
        </Layout>
      )}
    </>
  );
};
