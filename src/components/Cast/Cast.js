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

  const imageUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    <Layout>
      {movieCast.length === 0 && (
        <p>We didn't find any actors for this movie.</p>
      )}

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
