import React, { useState, useEffect } from 'react';
import './style/tapandgoride.css';
import '../css/news.css'; 
import '../css/support.css'; 
import moto from '../asset/moto.jpeg';
import agent from '../asset/agent.jpeg';
import tap from '../asset/PAS_8726-min-scaled.jpg';
import newsImage1 from '../asset/WhatsApp-Image-2020-05-20-at-12.40.04-PM-min.jpg';
import newsImage2 from '../asset/PAS_8726-min-scaled.jpg';
import newsImage3 from '../asset/IMG_4421.jpg';
import newsImage4 from '../asset/Patrick-B-Nsenga.jpg'; 
import newsImage5 from '../asset/IMG_4164-min-scaled.jpg';
import newsImage6 from '../asset/IMG_4520-scaled.jpg';

function TapAndGoRide() {
  const allNewsItems = [
    {
      id: 1,
      image: newsImage1,
      title: "AC Group launches green initiative for public transport",
      description: "AC Group Ltd has launched Tap&Go Green, an initiative to convert buses from fuel to Liquefied Petroleum Gas...",
      date: "MAR 09"
    },
    {
      id: 2,
      image: newsImage5,
      title: "Tap&Go Green reduces carbon emissions in Kigali",
      description: "The new Tap&Go Green program has already cut vehicle emissions by 20% across participating bus routes...",
      date: "MAR 12"
    },
    {
      id: 3,
      image: newsImage6,
      title: "Environmental impact of Tap&Go Green",
      description: "Experts evaluate the positive environmental impact of AC Group's new green transport initiative...",
      date: "MAR 20"
    },
    {
      id: 4,
      image: newsImage3,
      title: "Government supports Tap&Go Green initiative",
      description: "Rwanda's Ministry of Environment has endorsed AC Group's green transport program with new subsidies...",
      date: "MAR 28"
    },
    {
      id: 5,
      image: newsImage2,
      title: "Passengers embrace eco-friendly transport options",
      description: "A survey shows 87% of commuters support the conversion to LPG-powered buses in the city...",
      date: "APR 05"
    },
    {
      id: 6,
      image: newsImage4,
      title: "Tap&Go Green sets ambitious targets for 2025",
      description: "AC Group plans to convert 75% of Kigali's bus fleet to eco-friendly fuels by 2025...",
      date: "APR 18"
    }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState('next'); // 'next' or 'prev'
  const cardsToShow = 3; // Show 3 cards at once

  // Move to previous slide
  const prevSlide = () => {
    if (isTransitioning) return;
    
    setSlideDirection('prev');
    setIsTransitioning(true);
    
    setTimeout(() => {
      setStartIndex((prevIndex) => {
        if (prevIndex === 0) {
          return allNewsItems.length - 1;
        }
        return prevIndex - 1;
      });
    }, 50); // Small delay before changing the actual content
  };

  // Move to next slide
  const nextSlide = () => {
    if (isTransitioning) return;
    
    setSlideDirection('next');
    setIsTransitioning(true);
    
    setTimeout(() => {
      setStartIndex((prevIndex) => {
        if (prevIndex + 1 >= allNewsItems.length) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 50); // Small delay before changing the actual content
  };

  // Reset transition state after animation completes
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 600); // Match this to the CSS transition duration
      
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Get current visible news items (wrapping around if needed)
  const getVisibleNews = () => {
    const visibleItems = [];
    for (let i = 0; i < cardsToShow; i++) {
      const index = (startIndex + i) % allNewsItems.length;
      visibleItems.push(allNewsItems[index]);
    }
    return visibleItems;
  };

  const visibleNews = getVisibleNews();

  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing email:', email);
    // Reset the email input after submission
    setEmail('');
  };

  return (
    <div className="tapgo-container green-container">

      {/* Updated Hero Section with purple color scheme */}
      <div className="hero-section" style={{ 
        backgroundColor: 'white', 
        color: 'white',
        display: 'flex',
        minHeight: '400px'
      }}>
        <div className="hero-left" style={{ 
          flex: '1',
          padding: '3rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: 'rgba(162, 52, 146, 0.8)',
          borderRadius: '0 0 50px 0'
        }}>
          <div className="hero-content">
            <h1 className="hero-title" style={{
              fontSize: '3rem',
              marginBottom: '1.5rem',
              fontWeight: 'bold'
            }}>Tap&Go Ride</h1>
            <p className="hero-text" style={{
              fontSize: '1.2rem',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              With Tap&Go Ride, passengers are able to use the hailing app to call a moto and pay using their Tap&Go card at the end of the journey.
            </p>
            <p className="hero-tagline" style={{
              fontSize: '1.2rem',
              fontWeight: 'bold'
            }}>Convenient. Faster. Safer</p>
          </div>
        </div>
        
        <div className="hero-right" style={{
          flex: '1',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <img 
            src="https://www.acgroup.rw/wp-content/uploads/2021/03/Ride-motion-background.gif" 
            alt="RIDE AND GO"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '0 0 0 50px'
            }}
          />
        </div>
      </div>

      <div className="green-gallery-section">
        <div className="gallery-container">
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
            <div className="bottom-row">
              <div className="image-wrapper">
                <img src={newsImage1} alt="Transport staff assisting customer" />
              </div>
            </div>
          </div>
        </div>
          
          <div className="green-impact-content">
            <h2 className="impact-title">Tap&Go Green</h2>
            <p className="impact-description">
              We are all about reducing traffic on the road caused by private cars, and cutting emissions.
            </p>
            
            <div className="green-stats">
              <div className="green-stat-box">
                <h3 className="stat-number">20</h3>
                <p className="stat-label">EMISSIONS CUT</p>
              </div>
              
              <div className="green-stat-box">
                <h3 className="stat-number">100</h3>
                <p className="stat-label">FUEL EFFICIENCY</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News Section */}
      <section className="news-section">
        <div className="container">
          <h2 className="news-title">Latest News</h2>
          <p className="news-subtitle">
            AC Group has been featured in both local and international media.<br />
            See what others are saying about us.
          </p>
          
          <div className="news-slider-container">
            <div className="news-navigation left-nav">
              <div className={`nav-button ${isTransitioning ? 'disabled' : ''}`} onClick={prevSlide}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </div>
            </div>
            
            <div className={`news-grid ${isTransitioning ? 'transitioning' : ''} slide-${slideDirection}`}>
              {visibleNews.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`news-card ${index % 2 === 0 ? 'even' : 'odd'} ${index === 2 ? 'third' : ''}`}
                >
                  <div className="news-image">
                    <img src={item.image} alt={`AC Group News ${index + 1}`} />
                  </div>
                  <div className="news-content">
                    <h3 className="news-card-title">{item.title}</h3>
                    <p className="news-card-description">
                      {item.description}
                    </p>
                    <div className="news-date">{item.date}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="news-navigation right-nav">
              <div className={`nav-button ${isTransitioning ? 'disabled' : ''}`} onClick={nextSlide}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="support-section">
        <div className="container">
          <div className="shape-left"></div>
          <div className="shape-right"></div>
          <div className="support-container">
            <div className="support-content">
              <h2 className="support-title">Get our stories delivered?</h2>
              <p className="support-text">From us to your inbox weekly.</p>
            </div>
            
            <form className="subscription-form" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                className="email-input" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="subscribe-button">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TapAndGoRide;