import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMovieCast } from 'api';
import { Layout, CastList, CastItem, ActorName } from './Cast.styled';

export const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const filmCast = await searchMovieCast(movieId);
        setMovieCast(filmCast);
        setError(
          filmCast.length === 0
            ? "We didn't find any actors for this movie."
            : null
        );
      } catch (e) {
        setError("We didn't find any actors for this movie.");
      }
    };
    fetchMovieCast();
  }, [movieId]);

  const imageUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    <Layout>
      {error && <p>{error}</p>}
      {movieCast.length > 0 && (
        <CastList>
          {movieCast.map(
            ({ id, profile_path, original_name, name, character }) => {
              return (
                <CastItem key={id}>
                  <img
                    src={
                      profile_path
                        ? imageUrl + profile_path
                        : 'https://i.postimg.cc/NF6QdzcX/no.jpg'
                    }
                    alt={original_name}
                  />
                  <ActorName>{name}</ActorName>
                  <p>Character: {character}</p>
                </CastItem>
              );
            }
          )}
        </CastList>
      )}
    </Layout>
  );
};
