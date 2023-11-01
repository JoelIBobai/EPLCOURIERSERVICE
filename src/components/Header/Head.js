import React from "react";
import EPL from "./EPL.png";
import globesvgrepocom from "./globe-svgrepo-com.png";
import searchalt1svgrepocom from "./search-alt-1-svgrepo-com.png";
const Head = () => {
    return (
        <header>
  <a className="home-link" href="index.html">
    <img className="logo" src={EPL} alt="EPL Logo" />
  </a>
  <div className="header-box">
    <div className="search header-buttons">
      <p>Search</p>
      <input type="text" name="" id="" className="search-bar" />
      <div className="search-icon">
        <a href="">
          <img className="icons" src={globesvgrepocom} alt="Search icon" />
        </a>
      </div>
    </div>

    <div className="location header-buttons">
      <p>Location</p>
      <div className="location-icon">
        <a href="">
          <img className="icons" src={searchalt1svgrepocom} alt="Globe icon" />
        </a>
      </div>
    </div>
  </div>
</header>
        );
    };
    
    export default Head;


