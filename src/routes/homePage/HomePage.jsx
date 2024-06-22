import React from "react";
import "./homePage.scss";
import SearchBar from "../../components/searchBar/SearchBar";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Cars & Get Your Dream Whip</h1>
          <p>Lorem ipsum</p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>17+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Cars Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="bg.png" alt="image" />
      </div>
    </div>
  );
}

export default HomePage;
