import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMovieReviews } from 'api';
import { Layout, ReviewList, ReviewItem, ReviewAvtor } from './Reviews.styled';

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const filmReviews = await searchMovieReviews(movieId);
        console.log(filmReviews);
        setMovieReviews(filmReviews);
      } catch (e) {
        console.log(e);
        // throw e;
      } finally {
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <Layout>
      {movieReviews.length === 0 && (
        <p>We don't have any reviews for this movie.</p>
      )}
      {movieReviews.length > 0 && (
        <ReviewList>
          {movieReviews.map(review => {
            return (
              <ReviewItem key={review.id}>
                <ReviewAvtor>Author: {review.author}</ReviewAvtor>
                <p>{review.content}</p>
              </ReviewItem>
            );
          })}
        </ReviewList>
      )}
      {/* <ReviewList>
        {movieReviews.map(review => {
          return (
            <ReviewItem key={review.id}>
              <ReviewAvtor>Author: {review.author}</ReviewAvtor>
              <p>{review.content}</p>
            </ReviewItem>
          );
        })}
      </ReviewList> */}
    </Layout>
  );
};
