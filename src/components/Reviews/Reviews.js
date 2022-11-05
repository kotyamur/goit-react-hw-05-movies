import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMovieReviews } from 'api';
import { Layout, ReviewList, ReviewItem, ReviewAvtor } from './Reviews.styled';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const filmReviews = await searchMovieReviews(movieId);
        setMovieReviews(filmReviews);
        setError(
          filmReviews.length === 0
            ? "We don't have any reviews for this movie."
            : null
        );
      } catch (e) {
        setError("We don't have any reviews for this movie.");
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <Layout>
      {error && <p>{error}</p>}
      {movieReviews.length > 0 && (
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
