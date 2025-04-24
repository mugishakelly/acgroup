import React from "react";
import aclogo from "../asset/acgroup-logo.png";
import '../css/header.css';

function Header() {
  return (
    <section className="header-hero-section">
      <div className="container header-container">
        <a href="/" className="logo">
          <div className="logo-text">
            <img src={aclogo} alt="AC Group Logo" />
          </div>
        </a>
        
        <nav>
  <ul>
    <li><a href="#">Who We are</a></li>
    
    <li className="dropdown">
      <a href="#">Our Products</a>
      <ul className="dropdown-menu">
        <li><a href="#">tap & go</a></li>
        <li><a href="#">tap & go WiFi</a></li>
        <li><a href="#">tap & go Ride</a></li>
        <li><a href="#">tap & go Green</a></li>
      </ul>
    </li>

    <li><a href="#">Our People</a></li>
    <li><a href="#">Our Insights</a></li>
    <li><a href="#">Our Customers</a></li>
  </ul>
</nav>
        
        <a href="tel:6655" className="toll-button">Toll:6655</a>
      </div>
    </section>
  );
}

export default Header;
