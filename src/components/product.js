import React from 'react';
import '../css/products.css';
import tapGoLogo from '../asset/TapGologo-min.png';
import tapGoWifiLogo from '../asset/TapGo-Wifi-logo.png';
import tapGoRideLogo from '../asset/TapGo-Ride-logo.png';
import tapGoGreenLogo from '../asset/TapGo-green-logo-min.png';

function Products() {
  return (
    <section className="pro-section">
      <h2>Our Products</h2>
      <p className="pro-p">
        Our products are smart, seamless and easy to use. Every product we create is centered around our customers' needs.
      </p>

      <div className="cards">
        <div className="card blue">
          <h3><img src={tapGoLogo} alt="Tap&Go Logo" /></h3>
          <p>An automated fare collection system for transport operators and convenience to commuters.</p>
          <a className="blue" href="#">Read more</a>
        </div>

        <div className="card orange">
          <h3><img src={tapGoWifiLogo} alt="Tap&Go Wifi Logo" /></h3>
          <p>Stay connected during all your bus rides Kigali with Tap&Go Wifi. It is fast, reliable.</p>
          <a className="orange" href="#">Read more</a>
        </div>

        <div className="card purple">
          <h3><img src={tapGoRideLogo} alt="Tap&Go Ride Logo" /></h3>
          <p>Stop one on the road and pay using your Tap&Go card. It is smart, safer and convenient.</p>
          <a className="purple" href="#">Read more</a>
        </div>

        <div className="card green">
          <h3><img src={tapGoGreenLogo} alt="Tap&Go Green Logo" /></h3>
          <p>Introducing an Eco friendly and cost effective solution to buses to use LPG (Liquefied Petroleum Gas).</p>
          <a className="green" href="#">Read more</a>
        </div>
      </div>
    </section>
  );
}

export default Products;