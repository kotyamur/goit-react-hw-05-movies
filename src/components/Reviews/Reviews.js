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
