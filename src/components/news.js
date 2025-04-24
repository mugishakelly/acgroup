import React, { useState, useEffect } from 'react';
import '../css/news.css';
// You would replace these with your actual imports
import newsImage1 from '../asset/WhatsApp-Image-2020-05-20-at-12.40.04-PM-min.jpg';
import newsImage2 from '../asset/PAS_8726-min-scaled.jpg';
import newsImage3 from '../asset/IMG_4421.jpg';
import newsImage4 from '../asset/Patrick-B-Nsenga.jpg'; // You'll need to add these images
import newsImage5 from '../asset/IMG_4164-min-scaled.jpg';
import newsImage6 from '../asset/IMG_4520-scaled.jpg';

function News() {
  // Sample news data - replace with your actual data
  const allNewsItems = [
    {
      id: 1,
      image: newsImage1,
      title: "AC Group to expand services beyond Kigali",
      description: "AC Group Ltd, a Rwandan tech firm providing smart transport solutions, last week unveil...",
      date: "MAR 09"
    },
    {
      id: 2,
      image: newsImage5,
      title: "Rwandan tech company, AC Group invests Rwf3b in taxi moto solutions",
      description: "AC Group, a Rwandan tech firm enabling payment in public transport recently debuted into...",
      date: "MAR 09"
    },
    {
      id: 3,
      image: newsImage6,
      title: "Tap&Go and the myth that surrounds it",
      description: "AC Group Ltd is a Rwandan tech firm providing smart transport solutions that help ease...",
      date: "MAR 09"
    },
    {
      id: 4,
      image: newsImage3,
      title: "AC Group launches new mobile app",
      description: "The new mobile application allows users to top up their Tap&Go cards directly from their phones...",
      date: "MAR 15"
    },
    {
      id: 5,
      image: newsImage2,
      title: "Partnership announced with local transportation authority",
      description: "AC Group has signed a five-year contract to expand their services to more regions...",
      date: "APR 02"
    },
    {
      id: 6,
      image: newsImage4,
      title: "International recognition for innovative transport solutions",
      description: "AC Group has been recognized at the Global Transport Innovation Awards for their Tap&Go system...",
      date: "APR 18"
    }
  ];

  // State to track the first visible card index
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

  return (
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
  );
}

export default News;