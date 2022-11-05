import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMovieReviews } from 'api';

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
    <div>
      Reviews
      <ul>
        {movieReviews.map(review => {
          return (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
