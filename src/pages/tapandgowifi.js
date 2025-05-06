import React, { useState, useEffect } from 'react';
import './style/tapandgowifi.css';
import '../css/news.css'; 
import '../css/support.css'; 
import wifiImage1 from '../asset/PAS_8726-min-scaled.jpg'; // Replace with actual WiFi image
import newsImage1 from '../asset/WhatsApp-Image-2020-05-20-at-12.40.04-PM-min.jpg';
import newsImage2 from '../asset/PAS_8726-min-scaled.jpg';
import newsImage3 from '../asset/IMG_4421.jpg';
import newsImage4 from '../asset/Patrick-B-Nsenga.jpg'; 
import newsImage5 from '../asset/IMG_4164-min-scaled.jpg';
import newsImage6 from '../asset/IMG_4520-scaled.jpg';

function TapAndGoWifi() {
  const [activeTab, setActiveTab] = useState('wifi');

  const allNewsItems = [
    {
      id: 1,
      image: newsImage1,
      title: "AC Group expands WiFi coverage in Kigali",
      description: "AC Group Ltd has announced the expansion of its Tap&Go WiFi service to cover all major bus routes in Kigali...",
      date: "MAR 09"
    },
    {
      id: 2,
      image: newsImage5,
      title: "Tap&Go WiFi transforms commuter experience",
      description: "With average daily usage exceeding 300,000 connections, the Tap&Go WiFi service has become a crucial part of Rwanda's public transport...",
      date: "MAR 09"
    },
    {
      id: 3,
      image: newsImage6,
      title: "Digital connectivity on public transport",
      description: "AC Group Ltd's WiFi initiative is helping to bridge the digital divide by providing free internet access to commuters...",
      date: "MAR 09"
    },
    {
      id: 4,
      image: newsImage3,
      title: "Tap&Go WiFi enhances mobile app functionality",
      description: "The integration of WiFi services with the Tap&Go mobile app allows for seamless connectivity and improved user experience...",
      date: "MAR 15"
    },
    {
      id: 5,
      image: newsImage2,
      title: "Partnership with internet service providers",
      description: "AC Group has signed agreements with leading ISPs to ensure high-quality internet service on all equipped buses...",
      date: "APR 02"
    },
    {
      id: 6,
      image: newsImage4,
      title: "Recognition for innovative connectivity solutions",
      description: "AC Group's Tap&Go WiFi has been recognized for its contribution to smart city development in Rwanda...",
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
    <div className="tapgo-container">

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-left wifi-hero">
          <div className="hero-content">
            <h1 className="hero-title">Get connected on the go</h1>
            <p className="hero-text">
              Tap&Go WiFi connects public transport users to stay connected and productive during their commute. Faster. Reliable. Accessible.
            </p>
          </div>
        </div>
        {/* Right image section */}
        <div className="hero-right">
          <img 
            src={newsImage2} 
            alt="Person using Tap&Go WiFi on bus"
            className="hero-image"
          />
        </div>
      </div>

      {/* WiFi Connection Process Section */}
      <div className="wifi-process-section">
        <div className="process-timeline">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3 className="step-title">Get on the bus</h3>
            <p className="step-description">
              The passenger with smartphones is able to connect to free WiFi on the bus.
            </p>
          </div>
          
          <div className="process-step">
            <div className="step-number">2</div>
            <h3 className="step-title">Find WiFi SSD</h3>
            <p className="step-description">
              See dropdown menu with Tap&Go WiFi.
            </p>
          </div>
          
          <div className="process-step">
            <div className="step-number">3</div>
            <h3 className="step-title">Get Connected</h3>
            <p className="step-description">
              Choose Tap&Go WiFi and start browsing.
            </p>
          </div>
        </div>
      </div>

      {/* WiFi Impact Section - Based on the screenshot */}
      <div className="wifi-impact-section">
        <div className="wifi-impact-container">
          <div className="wifi-image-container">
            <img 
              src={wifiImage1} 
              alt="Person in orange shirt providing WiFi service on bus" 
              className="wifi-impact-image" 
            />
          </div>
          
          <div className="wifi-impact-content">
            <h2 className="impact-title">Tap&Go Wifi Impact</h2>
            <p className="impact-description">
              Our WiFi is faster, reliable and accessible to all passengers. 300+ People connected daily.
            </p>
            
            <div className="wifi-stats">
              <div className="wifi-stat-box">
                <h3 className="stat-number">300,000+</h3>
                <p className="stat-label">PEOPLE CONNECTED DAILY</p>
              </div>
              
              <div className="wifi-stat-box">
                <h3 className="stat-number">80+</h3>
                <p className="stat-label">GBs OF DATA USED</p>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default TapAndGoWifi;