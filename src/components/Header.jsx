import Button from "./Button.jsx";

// Genre names stored in an array so the links are rendered with .map()
const genres = ["Action", "Comedy", "Romance", "Drama"];

function Header() {
  return (
    <header className="header">
      <h1 className="header__logo">
        watch<span className="header__logo-accent">.it</span>
      </h1>

      {/* Hidden on mobile with CSS, shown from the tablet breakpoint */}
      <nav className="header__nav" aria-label="Genres">
        <ul className="header__nav-list">
          {genres && genres.map((genre) => (
            <li key={genre}>
              <a className="header__nav-link" href="#">
                {genre}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Button>Search</Button>
    </header>
  );
}

export default Header;
