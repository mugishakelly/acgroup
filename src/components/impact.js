// components/Impact.js
import React, { useState, useEffect } from 'react';
import '../css/impact.css';
import impactImage1 from '../asset/IMG_4421.jpg';
import impactImage2 from '../asset/PAS_8726-min-scaled.jpg';
import impactImage3 from '../asset/WhatsApp-Image-2020-05-20-at-12.40.04-PM-min.jpg';
import impactImage4 from '../asset/IMG_3964.jpg';

function Impact() {
    const [typewriterText, setTypewriterText] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    
    const phrases = ["Tap&Go WiFi", "Tap&Go Ride", "Tap&Go Green"];
    
    useEffect(() => {
      const fullText = phrases[phraseIndex];
      let timeout;
    
      if (isDeleting) {
        if (letterIndex > 0) {
          setTypewriterText(fullText.substring(0, letterIndex - 1));
          timeout = 120; // Slower deletion speed (was 50)
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          timeout = 500; // Longer pause before starting next word (was 300)
        }
      } else {
        if (letterIndex < fullText.length) {
          setTypewriterText(fullText.substring(0, letterIndex + 1));
          timeout = 200; // Slower typing speed (was 100)
        } else {
          timeout = 2000; // Longer pause at the end of word (was 1500)
          setIsDeleting(true);
        }
      }
    
      const nextStep = setTimeout(() => {
        if (isDeleting) {
          setLetterIndex(prev => prev - 1);
        } else {
          setLetterIndex(prev => prev + 1);
        }
      }, timeout);
    
      return () => clearTimeout(nextStep);
    }, [letterIndex, phraseIndex, isDeleting, phrases]);

  return (
    <div className="main-content">
      <div className="content-container">
        <div className="image-grid">
          <div className="grid-image">
            <img src={impactImage1} alt="AC Group staff member assisting passenger" />
          </div>
          <div className="grid-image">
            <img src={impactImage4} alt="Bus attendant in orange uniform" />
          </div>
          <div className="grid-image">
            <img src={impactImage2} alt="Person using Tap&Go card" />
          </div>
          <div className="grid-image">
            <img src={impactImage3} alt="Passenger tapping card on bus" />
          </div>
        </div>
        
        <div className="text-content">
          <h1>Our Impact</h1>
          <h2>
            <span id="typewriter-text">{typewriterText}</span>
            <span className="cursor">|</span>
          </h2>
          
          <p>
            Since inception, we have facilitated over 298,075,606 journeys, more than 3 Million people use the Tap&Go card, 
            and we serve more than 20 bus companies in Rwanda.
          </p>
          
          <div className="stats">
            <div className="stat-box">
              <div className="stat-number">298,075,606+</div>
              <div className="stat-label">JOURNEYS</div>
            </div>
            
            <div className="stat-box">
              <div className="stat-number">3,000,000+</div>
              <div className="stat-label">CARD HOLDERS</div>
            </div>
            
            <div className="stat-box">
              <div className="stat-number">100+</div>
              <div className="stat-label">JOBS CREATED</div>
            </div>
          </div>
        </div>
      </div>
      <div className="wave"></div>
    </div>
  );
}

export default Impact;
