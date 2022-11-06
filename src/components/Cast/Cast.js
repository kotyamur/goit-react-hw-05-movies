import { useParams } from 'react-router-dom';
import { searchMovieCast } from 'api';
import { Layout, CastList, CastItem, ActorName } from './Cast.styled';
import { useRequest } from 'hooks/useRequest';
import { generateUrl } from 'utils';

const Cast = () => {
  const { movieId } = useParams();

  const [movieCast, error] = useRequest(
    () => searchMovieCast(movieId),
    [movieId]
  );

  return (
    <Layout>
      {error && <p>{error}</p>}
      {movieCast?.length === 0 && (
        <p>We didn't find any actors for this movie.</p>
      )}
      {movieCast?.length > 0 && (
        <CastList>
          {movieCast.map(
            ({ id, profile_path, original_name, name, character }) => {
              return (
                <CastItem key={id}>
                  <img src={generateUrl(profile_path)} alt={original_name} />
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

export default Cast;
