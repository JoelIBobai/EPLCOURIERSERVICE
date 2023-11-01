import React from "react";
import Head from "./Head";
import "./index.css";


const Index = () => {
    return (
        <>
        <Head />
        <div className="toggle-button">
      <span className="toggle-button-icon" id="t-btn">&#9776;</span>
    </div>
    <nav>
  <div className="navigation" id="nav">
    <a href="#track">Track</a>
    <a href="#services">Ship</a>
    <a id="service-link" href="#help">Customer Service</a>
    <a id="location-link" href="">Location</a>
  </div>
</nav>

        </>
        );
    };
    
    export default Index;
    