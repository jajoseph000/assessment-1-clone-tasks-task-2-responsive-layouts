import MovieCard from "./MovieCard.jsx";
import movies from "../data/movies.js";

// Decides which layout variant a card gets, based on its position.
// The variants only change anything at the desktop breakpoint (see index.css).
//   index 0     -> "featured"   (row 1: big card, wide poster)
//   index 1, 2  -> no variant   (row 2: two normal cards side by side)
//   index 3+    -> "horizontal" (rows 3-5: poster left, text right)
function getVariant(index) {
  if (index === 0) return "featured";
  if (index >= 3) return "horizontal";
  return "";
}

function MovieList() {
  return (
    <main className="movie-list">
      {movies && movies.map((movie, index) => (
        <MovieCard
          key={movie?.id}
          title={movie?.title}
          year={movie?.year}
          poster={movie?.poster}
          description={movie?.description}
          variant={getVariant(index)}
        />
      ))}
    </main>
  );
}

export default MovieList;
