import Header from "./components/Header.jsx";
import MovieList from "./components/MovieList.jsx";

// App only arranges the page: header on top, list of movies below.
function App() {
  return (
    <>
      <Header />
      <MovieList />
    </>
  );
}

export default App;
