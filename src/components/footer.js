import React from 'react';
import '../css/footer.css';
import acgroupLogo from '../asset/acgroup-logo.png';

function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-about">
          <div className="logo-text footer-logo">
            <span className="ac"><img src={acgroupLogo} alt="AC Group Logo" /></span>
          </div>
          <p className="footer-slogan">Innovation. Impact. Community.</p>
        </div>
        
        <div className="footer-links-column">
          <h3 className="footer-heading">COMPANY LINKS</h3>
          <ul className="footer-links">
            <li><a href="#">Who We are</a></li>
            <li><a href="#">Our People</a></li>
            <li><a href="#">Our Insights</a></li>
            <li><a href="#">Our Customers</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        
        <div className="footer-links-column">
          <h3 className="footer-heading">PRODUCTS</h3>
          <ul className="footer-links">
            <li><a href="#">Tap&Go</a></li>
            <li><a href="#">Tap & Go Wifi</a></li>
            <li><a href="#">Tap & Go Ride</a></li>
            <li><a href="#">Tap&Go Green</a></li>
          </ul>
        </div>
        
        <div className="footer-links-column">
          <h3 className="footer-heading">CONNECT</h3>
          <ul className="footer-links">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Youtube</a></li>
          </ul>
        </div>
      </div>
      
      <div className="container footer-bottom">
        <div className="copyright">Copyright © 2021 Acgroup Ltd.</div>
        <div className="footer-bottom-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;