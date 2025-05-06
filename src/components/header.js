import React from "react";
import { Link } from "react-router-dom";
import aclogo from "../asset/acgroup-logo.png";
import '../css/header.css';

export default function Header() {
  const mainLinks = [
    { name: "Who We are", to: "/whoweare" },
    { name: "Our People", to: "/ourpeople" },
    { name: "Our Insights", to: "/insights" },
    { name: "Our Customers", to: "/customer" }
  ];

  const productLinks = [
    { name: "tap & go", to: "/tapandgo" },
    { name: "tap & go WiFi", to: "/tapandgowifi" },
    { name: "tap & go Ride", to: "/tapandgoride" },
    { name: "tap & go Green", to: "/tapandgogreen" }
  ];

  return (
    <section className="header-hero-section">
      <div className="container header-container">
        <Link to="/" className="logo">
          <div className="logo-text">
            <img src={aclogo} alt="AC Group Logo" />
          </div>
        </Link>

        <nav>
          <ul>
            {mainLinks.slice(0, 1).map((link, index) => (
              <li key={index}><Link to={link.to}>{link.name}</Link></li>
            ))}

            <li className="dropdown">
              <span className="dropdown-link">Our Products</span>
              <ul className="dropdown-menu">
                {productLinks.map((link, index) => (
                  <li key={index}><Link to={link.to}>{link.name}</Link></li>
                ))}
              </ul>
            </li>

            {mainLinks.slice(1).map((link, index) => (
              <li key={index + 1}><Link to={link.to}>{link.name}</Link></li>
            ))}
          </ul>
        </nav>

        <a href="tel:6655" className="toll-button">Toll:6655</a>
      </div>
    </section>
  );
}