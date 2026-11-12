import Button from "./Button.jsx";

// A single movie card. All data arrives through props,
// so the same component is reused for all 6 movies.
// `variant` adds a modifier class (BEM style) used by the desktop layout.
function MovieCard({ title, year, poster, description, variant }) {
  const className = variant ? `movie-card movie-card--${variant}` : "movie-card";

  return (
    <article className={className}>
      <img className="movie-card__poster" src={poster} alt={`${title} poster`} />

      <div className="movie-card__body">
        <div className="movie-card__text">
          <h2 className="movie-card__title">
            {title} ({year})
          </h2>
          <p className="movie-card__description">{description}</p>
        </div>

        <Button className="movie-card__button">Watch now</Button>
      </div>
    </article>
  );
}

export default MovieCard;
