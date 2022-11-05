import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMovieCast } from 'api';
import { Layout, CastList, CastItem, ActorName } from './Cast.styled';

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
    <Layout>
      <CastList>
        {movieCast.length === 0 && (
          <p>We don't have any reviews for this movie.</p>
        )}
        {movieCast.map(movie => {
          return (
            <CastItem key={movie.id}>
              <img src={url + movie.profile_path} alt={movie.original_name} />
              <ActorName>{movie.name}</ActorName>
              <p>Character: {movie.character}</p>
            </CastItem>
          );
        })}
      </CastList>
    </Layout>
  );
};
