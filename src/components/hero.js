import React, { useState, useEffect } from 'react';
import '../css/hero.css';
import heroImage1 from '../asset/IMG_4421.jpg';
import heroImage2 from '../asset/PAS_8726-min-scaled.jpg';
import heroImage3 from '../asset/WhatsApp-Image-2020-05-20-at-12.40.04-PM-min.jpg';

function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    { id: 0, src: heroImage1, alt: "AC Group Transport Solution 1" },
    { id: 1, src: heroImage2, alt: "AC Group Transport Solution 2" },
    { id: 2, src: heroImage3, alt: "AC Group Transport Solution 3" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="hero-wrapper">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="innovation">Innovation.</span> <span className="impact">Impact.</span><br />
            <span className="community">Community.</span>
          </h1>
          <p className="hero-description">
            AC Group is a technology company providing smart transport solutions in Rwanda and 
            across African cities since 2015.
          </p>
          <a href="#" className="learn-more">Learn More &gt;</a>
        </div>
        
        <div className="slideshow-container">
          {slides.map((slide, index) => (
            <div key={slide.id} className={`slide ${index === slideIndex ? 'active' : ''}`}>
              <img src={slide.src} alt={slide.alt} />
            </div>
          ))}
          
          <div className="slideshow-nav">
            {slides.map((slide, index) => (
              <div 
                key={slide.id}
                className={`slideshow-dot ${index === slideIndex ? 'active' : ''}`} 
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;