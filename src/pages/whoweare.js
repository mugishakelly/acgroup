import React from 'react';
import '../css/main.css';
import './style/whoweare.css';
import moto from '../asset/moto.jpeg';
import agent from '../asset/agent.jpeg';
import tap from '../asset/PAS_8726-min-scaled.jpg';
import phone from '../asset/phone.jpeg';
import phone1 from '../asset/phone1.jpeg';
import whatsapp from '../asset/WhatsApp-Image-2020-05-20-at-12.40.04-PM-min.jpg';
import rtcLogo from '../asset/rftc-150x150.png';
import smartAfricaLogo from '../asset/partner3-150x150.jpg';
import wefLogo from '../asset/partner4-150x150.jpg';
import kbsLogo from '../asset/partner5-150x150.jpg';
import { CheckCircle } from 'lucide-react';

function WhoWeAre() {
  return (
    <div className="who-we-are-page">
      {/* Who We Are Section */}
      <div className="container">
        <div className="who-we-are-content">
          <h1 className="page-title">Who we are</h1>
          <p className="page-description">
            We are the leading provider of smart and interactive transport
            solutions in African cities, bringing efficient cashless payment systems
            to the mostly informal cash-based public transport system in emerging
            African cities. AC Group is currently operational in Rwanda, Kigali and
            Cameroon, Yaounde.
          </p>
        </div>
        
        <div className="image-gallery">
          {/* Left column - motorcycle rider */}
          <div className="image-column left-column">
            <div className="image-wrapper">
              <img src={moto} alt="Motorcycle rider with red vest" />
            </div>
          </div>
          
          {/* Middle column - two images */}
          <div className="image-column middle-column">
            <div className="image-wrapper">
              <img src={agent} alt="Transport staff with customer" />
            </div>
            <div className="image-wrapper">
              <img src={tap} alt="Person using transport payment system" />
            </div>
          </div>
          
          {/* Right column - three images */}
          <div className="image-column right-column">
            <div className="top-row">
              <div className="image-wrapper">
                <img src={phone} alt="Person using mobile phone" />
              </div>
              <div className="image-wrapper">
                <img src={phone1} alt="Person using smartphone" />
              </div>
            </div>
            <div className="bottom-row">
              <div className="image-wrapper">
                <img src={whatsapp} alt="Transport staff assisting customer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Values section with angled design */}
      <div className="values-section">
        <div className="container values-container">
          <div className="values-columns">
            <div className="values-column">
              <h2 className="values-title">Our Vision</h2>
              <p className="values-text">
                To be the Africa's customer centric company that creates and 
                designs technology systems that connect people and cities
              </p>
              
              <h2 className="values-title mission-title">Our Mission</h2>
              <p className="values-text">
                To provide smart transport solutions to Mass urban 
                transportation cities and related service providers in Africa 
                through Reliable, secure and fast systems
              </p>
            </div>
            
            <div className="values-column">
              <h2 className="values-title">Our Core Values</h2>
              <ul className="values-list">
                <li className="values-list-item">
                  <CheckCircle className="check-icon" size={24} color="#6cd4a4" />
                  <span>We Strive for Innovation and Excellence.</span>
                </li>
                <li className="values-list-item">
                  <CheckCircle className="check-icon" size={24} color="#6cd4a4" />
                  <span>We Act with Integrity and Empathy.</span>
                </li>
                <li className="values-list-item">
                  <CheckCircle className="check-icon" size={24} color="#6cd4a4" />
                  <span>We serve with Passion.</span>
                </li>
                <li className="values-list-item">
                  <CheckCircle className="check-icon" size={24} color="#6cd4a4" />
                  <span>We value Teamwork and Diversity.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Partners Section */}
      <div className="partners-section">
        <div className="container">
          <div className="partners-content">
            <h1 className="partners-title">Our Partners</h1>
            <p className="partners-description">
              We partner with leading public transport providers and 
              governments to deliver seamless services to public transport
              users across Africa.
            </p>
          </div>
          
          <div className="partners-logos">
            <div className="partner-logo">
              <img src={rtcLogo} alt="RTC Transport" />
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
          </div>
        </div>
      </div>

      <section className="support-section">
      <div className="container">
          <div className="shape-left"></div>
          <div className="shape-right"></div>
        <div className="support-container">
          
          <div className="support-content">
            <h2 className="support-title">Join the youngest, innovative and dynamic team.            </h2>
            <p className="support-text">Email us at career@acgroup.rw</p>
          </div>
          
          <a href="#" className="contact-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Contact us
          </a>
        </div>
      </div>
    </section>

    </div>
  );
}

export default WhoWeAre;