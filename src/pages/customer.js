import React from 'react';
import './style/customer.css';
import '../css/main.css';
import kbsLogo from '../asset/rftc-150x150.png';
import rgLogo from '../asset/partner5-150x150.jpg';
import smartAfricaLogo from '../asset/partner4-150x150.jpg';
import wefLogo from '../asset/partner5-150x150.jpg';
import royalExpressLogo from '../asset/Royal-Express-150x150.jpeg';
import ruraLogo from '../asset/RURA-150x150.png';

function CustomersPage() {
  return (
    <div className="customers-page">
      <h1>Our Customers</h1>
      <p className="customers-description">
        We partner with bus companies and governments in cities
        across African to deliver seamless and smart public transport
        solutions that improve a passanger's experience.
      </p>

      <div className="partners-section">
        <div className="container">
          <div className="partners-logos">
            <div className="partner-logo">
              <img src={rgLogo} alt="RTC Transport" />
            </div>
            <div className="partner-logo">
              <img src={smartAfricaLogo} alt="Smart Africa" />
            </div>
            <div className="partner-logo">
              <img src={wefLogo} alt="World Economic Forum" />
            </div>
            <div className="partner-logo">
              <img src={kbsLogo} alt="KBS Services" />
            </div>
            <div className="partner-logo">
              <img src={royalExpressLogo} alt="KBS Services" />
            </div>
            <div className="partner-logo">
              <img src={ruraLogo} alt="KBS Services" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomersPage;