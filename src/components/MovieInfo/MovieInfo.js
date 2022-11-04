export const MovieInfo = ({ movie }) => {
  let url = 'https://image.tmdb.org/t/p/w500/';
  return (
    <div>
      <img src={url + movie.poster_path} alt={movie.original_title} />
      <p>
        {movie.title} ({String(movie.release_date).slice(0, 4)})
      </p>
      <p>User Score: {movie.popularity}%</p>
      <p>Overviev</p>
      <p>{movie.overview}</p>
      <p>Genres</p>
      <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
    </div>
  );
};
