import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({ setCurrentMovieName }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleChange(event) {
    const { value } = event.target;
    setQuery(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const uppercaseQuery = query.charAt(0).toUpperCase() + query.slice(1);
    setCurrentMovieName(uppercaseQuery);
    const queryForParams = query.split(" ").join("+");
    navigate(`/${queryForParams}`);
  };

  return (
    <section className="search-bar-container">
      <form onSubmit={handleSubmit}>
        <div className="search-bar">
          <input
            id="movie-name"
            type="text"
            placeholder="Search for movies"
            onChange={handleChange}
            value={query}
            className="film-input"
          ></input>
        </div>
        <button id="search-btn" type="submit">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
