import React from "react";
import Header from "../../components/Header/index";
import EPL from "../../components/Header/EPL.png"
import { Outlet } from "react-router-dom";
import "./index.css";


const DashboardLayout = () => {
    return (
        <div>
            <Header />
             <Outlet />
             <footer>
  <div className="footer-container">
    <div className="footer-logo">
      <img src={EPL} alt="EPL Courier Services Logo" />
      <p>EPL Courier Services</p>
    </div>
    <div className="footer-links">
      <ul>
        <li><a href="about.html">About Us</a></li>
        <li><a rel="noopener" target="_blank" href="#services">Our Services</a></li>
        <li><a href="locations.html">Locations</a></li>
        <li><a rel="noopener" target="_blank" href="#help">Contact Us</a></li>
        <li><a href="terms.html">Legal Notice</a></li>
        <li><a href="terms.html">Terms of Use</a></li>
      </ul>
    </div>
    <div className="footer-contact">
      <p>Contact Information</p>
      <p>Email: info@eplcourier.com</p>
      <p>Phone: +60 18-974-9844</p>
      <p>
        Address: <span>&#x1F3F2;</span> Fronts de Neudorf 67100 Strasbourg, France.
      </p>
    </div>
  </div>
  <div className="footer-social">
    <p>Follow Us</p>
    <a href="#" className="fa fa-facebook"></a>
    <a href="#" className="fa fa-twitter"></a>
    <a href="#" className="social-icon">LinkedIn</a>
  </div>
  <hr />
  <p className="copyright">Copyright ©2009-2023 EPL Courier Services, Inc. All rights reserved.</p>
</footer>

        </div>
        );
    };
    
    export default DashboardLayout;
    