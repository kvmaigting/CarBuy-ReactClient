import React from "react";
import "./filter.scss";

function Filter() {
  return (
    <div className="filter">
      <h1>
        Search results for <b>Car Model</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="model">Model</label>
          <input type="text" id="model" name="model" placeholder="Car Model" />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="year">Year</label>
          <input
            type="number"
            id="year"
            name="year"
            min={1980}
            max={new Date().getFullYear()}
            placeholder="Any"
          />
        </div>
        <div className="item">
          <label htmlFor="min price">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            min={0}
            max={100000000}
            placeholder="Any"
          />
        </div>
        <div className="item">
          <label htmlFor="max price">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            min={0}
            max={100000000}
            placeholder="Any"
          />
        </div>
        <div className="item">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" name="location" placeholder="Any" />
        </div>
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  );
}

export default Filter;
