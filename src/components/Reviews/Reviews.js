import { useParams } from 'react-router-dom';
import { searchMovieReviews } from 'api';
import { Layout, ReviewList, ReviewItem, ReviewAvtor } from './Reviews.styled';
import { useRequest } from 'hooks/useRequest';

const Reviews = () => {
  const { movieId } = useParams();

  const [movieReviews, error] = useRequest(
    () => searchMovieReviews(movieId),
    [movieId]
  );

  return (
    <Layout>
      {error && <p>{error}</p>}
      {movieReviews?.length === 0 && (
        <p>We don't have any reviews for this movie.</p>
      )}
      {movieReviews?.length > 0 && (
        <ReviewList>
          {movieReviews.map(({ id, author, content }) => {
            return (
              <ReviewItem key={id}>
                <ReviewAvtor>Author: {author}</ReviewAvtor>
                <p>{content}</p>
              </ReviewItem>
            );
          })}
        </ReviewList>
      )}
    </Layout>
  );
};

export default Reviews;
