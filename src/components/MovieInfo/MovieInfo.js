import PropTypes from 'prop-types';
import {
  FilmInfo,
  Layout,
  FilmImage,
  Heading,
  FilmTitle,
} from './MovieInfo.styled';

export const MovieInfo = ({ movie }) => {
  const {
    poster_path,
    original_title,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;

  const imageUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    <Layout>
      <FilmImage
        src={
          poster_path
            ? imageUrl + poster_path
            : 'https://i.postimg.cc/L8fCW6RZ/repetajpg.jpg'
        }
        alt={original_title}
      />
      <FilmInfo>
        <FilmTitle>
          {title} ({String(release_date).slice(0, 4)})
        </FilmTitle>
        <p>User Score: {Math.round(vote_average * 10)}%</p>
        <Heading>Overviev</Heading>
        <p>{overview}</p>
        <Heading>Genres</Heading>
        <p>{genres.map(genre => genre.name).join(' ')}</p>
      </FilmInfo>
    </Layout>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
};
