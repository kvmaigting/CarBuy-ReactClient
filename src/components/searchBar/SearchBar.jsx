import React, { useState } from "react";
import "./searchBar.scss";

function SearchBar() {
  const [query, setQuery] = useState({
    location: "",
    minPrice: 0,
    maxPrice: 0,
    year: 0,
    model: "",
  });

  return (
    <div className="searchBar">
      <form>
        <input type="text" name="model" placeholder="Car Model" />
        <input
          type="number"
          name="year"
          min={1980}
          max={new Date().getFullYear()}
          placeholder="Year"
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={100000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={100000000}
          placeholder="Max Price"
        />

        <input type="text" name="location" placeholder="City location" />

        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
