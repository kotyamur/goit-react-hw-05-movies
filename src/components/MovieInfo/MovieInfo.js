import {
  FilmInfo,
  Layout,
  FilmImage,
  Heading,
  FilmTitle,
} from './MovieInfo.styled';

export const MovieInfo = ({ movie }) => {
  let url = 'https://image.tmdb.org/t/p/w500/';
  return (
    <Layout>
      <FilmImage src={url + movie.poster_path} alt={movie.original_title} />
      <FilmInfo>
        <FilmTitle>
          {movie.title} ({String(movie.release_date).slice(0, 4)})
        </FilmTitle>
        <p>
          User Score: {Math.round(movie.popularity)}% or {movie.vote_average}
        </p>
        <Heading>Overviev</Heading>
        <p>{movie.overview}</p>
        <Heading>Genres</Heading>
        <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
      </FilmInfo>
    </Layout>
  );
};
