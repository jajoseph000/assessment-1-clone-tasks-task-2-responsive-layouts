// One reusable button, used for both "SEARCH" and "WATCH NOW".
// Extra classes can be passed in so each place can tweak its layout.
function Button({ children, className = "" }) {
  return (
    <button type="button" className={`button ${className}`.trim()}>
      {children}
    </button>
  );
}

export default Button;
