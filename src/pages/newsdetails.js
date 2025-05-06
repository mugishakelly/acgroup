import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './style/news-detail.css';
import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

// Import your images
import newsImage1 from '../asset/WhatsApp-Image-2020-05-20-at-12.40.04-PM-min.jpg';
import newsImage2 from '../asset/PAS_8726-min-scaled.jpg';
import newsImage3 from '../asset/IMG_4421.jpg';
import newsImage4 from '../asset/Patrick-B-Nsenga.jpg';
import newsImage5 from '../asset/IMG_4164-min-scaled.jpg';
import newsImage6 from '../asset/IMG_4520-scaled.jpg';
import moto from '../asset/moto.jpeg';

function NewsDetailPage() {
  const { id } = useParams(); // Get the ID from the URL
  const [newsItem, setNewsItem] = useState(null);
  const [email, setEmail] = useState('');
  const [relatedNews, setRelatedNews] = useState([]);
  const [subscribeStatus, setSubscribeStatus] = useState('');
  const [loading, setLoading] = useState(true);

  // Sample news data - should match the same data structure as in the News component
  const allNewsItems = [
    {
      id: 1,
      image: newsImage1,
      title: "AC Group to expand services beyond Kigali",
      description: "AC Group Ltd, a Rwandan tech firm providing smart transport solutions, last week unveil...",
      date: "March 09, 2024",
      author: "Patrick Buchana",
      category: "Expansion",
      content: `
        <p>AC Group Ltd, a Rwandan tech firm providing smart transport solutions, last week unveiled plans to expand its operations beyond Kigali to other provinces in Rwanda and potentially to neighboring countries in the East African region.</p>
        
        <p>The company, known for its Tap&Go payment system that has revolutionized public transport in Kigali, is looking to leverage its success to bring efficient transport solutions to other urban centers.</p>
        
        <p>"We've seen tremendous success with our systems in Kigali, and we believe other cities can benefit from the same technology," said Patrick Buchana, CEO of AC Group. "Our expansion plans include rolling out our services to major towns in Rwanda before the end of the year, and we're already in talks with authorities in neighboring countries."</p>
        
        <h3>Addressing Regional Transport Challenges</h3>
        
        <p>The expansion comes at a time when many African cities are struggling with traffic congestion and inefficient public transport systems. AC Group's technology offers a solution by streamlining payment processes and providing data that can help optimize routes and schedules.</p>
        
        <p>The company's flagship product, the Tap&Go card, allows commuters to pay for bus rides electronically, eliminating the need for cash transactions and reducing boarding times. The system also collects valuable data on passenger numbers and peak travel times, which can be used to improve service delivery.</p>
        
        <p>"We're not just selling a payment solution; we're offering a comprehensive system that can transform how public transport operates," Buchana explained. "Our technology provides transport operators with insights that can help them make more informed decisions about fleet deployment and route planning."</p>
        
        <h3>Investment and Job Creation</h3>
        
        <p>As part of its expansion strategy, AC Group plans to invest in local talent and infrastructure in each new location it enters. The company estimates that its expansion could create hundreds of new jobs across the region, particularly in technology and customer service roles.</p>
        
        <p>"We believe in building local capacity," said Buchana. "When we enter a new market, we hire locally and provide training to ensure that our systems are maintained and supported by people who understand the local context."</p>
        
        <p>The company has already begun recruiting staff for its new operations in other Rwandan provinces and expects to be fully operational in these areas by the end of the year.</p>
      `,
      tags: ["Green Initiative", "Public Transport", "Environmental Sustainability", "LPG", "Carbon Emissions"]
    },
    {
      id: 2,
      image: moto,
      title: "Rwandan tech company, AC Group invests Rwf3b in taxi moto solutions",
      description: "AC Group, a Rwandan tech firm enabling payment in public transport recently debuted into...",
      date: "March 12, 2024",
      author: "Collins Mwai",
      category: "Investment",
      content: `
        <p>AC Group, the technology company behind Rwanda's popular Tap&Go payment system, has invested 3 billion Rwandan francs (approximately $3 million) in developing and implementing digital solutions for the country's motorcycle taxi sector.</p>
        
        <p>The investment, announced at a press conference in Kigali, will go towards expanding the Tap&Go system to include motorcycle taxis, locally known as "motos," which are a popular mode of transport across Rwanda.</p>
        
        <h3>Transforming the Moto Sector</h3>
        
        <p>"Motos are an essential part of Rwanda's transport ecosystem, with thousands of operators serving millions of rides each month," said Patrick Buchana, CEO of AC Group. "Our investment aims to bring the same level of efficiency and transparency to the moto sector that we've achieved in bus transport."</p>
        
        <p>The new system will allow passengers to pay for moto rides using their existing Tap&Go cards or through a mobile app, eliminating the need for cash transactions. Moto operators will be equipped with small, weatherproof devices that can read the cards and process payments.</p>
        
        <p>For moto operators, the system offers several advantages, including secure income tracking, reduced risk of carrying cash, and access to financial services based on their transaction history.</p>
        
        <h3>Financial Inclusion for Operators</h3>
        
        <p>A significant aspect of the investment is focused on improving financial inclusion for moto operators, many of whom currently operate in the informal economy.</p>
        
        <p>"By digitizing payments, we're creating a financial footprint for moto operators, which can help them access loans and other financial services," explained Buchana. "We've already partnered with several financial institutions that are willing to offer products specifically designed for operators who use our system."</p>
        
        <p>The company has also reached agreements with insurance providers to offer more affordable coverage for moto operators who join the Tap&Go network.</p>
      `,
      tags: ["Carbon Emissions", "Public Health", "Economic Benefits", "Urban Transport", "Air Quality"]
    },
    {
      id: 3,
      image: newsImage6,
      title: "Tap&Go and the myth that surrounds it",
      description: "AC Group Ltd is a Rwandan tech firm providing smart transport solutions that help ease...",
      date: "March 09, 2024",
      author: "Patrick Buchana",
      category: "Improvement to Society",
      content: `
        <p>Since its introduction in 2015, AC Group's Tap&Go payment system has transformed public transport in Rwanda, particularly in Kigali. However, despite its widespread adoption and benefits, several misconceptions continue to circulate about the service. This article aims to address some of these myths and provide clarity on how the system actually works.</p>
        
        <h3>Myth 1: "Tap&Go takes a large commission from bus fares"</h3>
        
        <p>One of the most persistent myths is that AC Group takes a significant percentage of each bus fare paid through the Tap&Go system, potentially reducing income for transport companies.</p>
        
        <p>"This is simply not true," explains Patrick Buchana, CEO of AC Group. "Our revenue model is based on a small service fee that is agreed upon with transport companies and approved by the regulator. We don't take a percentage of each fare."</p>
        
        <p>In fact, bus companies have reported increased revenue since adopting the Tap&Go system, primarily due to reduced leakage. Before digitization, companies were losing up to 20% of their revenue due to various inefficiencies and lack of transparency in cash collection.</p>
        
        <h3>Myth 2: "The WiFi on buses doesn't work"</h3>
        
        <p>Another common misconception relates to the WiFi service that AC Group provides on public buses. Some passengers believe that the service is non-functional or rarely works.</p>
        
        <p>"We understand why this perception exists," says Buchana. "Network connectivity can sometimes drop, just like it happens with mobile phones, but our technical team works around the clock to maintain connectivity."</p>
        
        <p>According to data from AC Group, buses in Kigali collectively use over 81.6 terabytes of data per month, suggesting that many passengers are indeed connecting to and using the WiFi service. The Rwanda Utilities Regulatory Authority (RURA) also monitors the service through a dashboard and regular inspections.</p>
      `,
      tags: ["Carbon Emissions", "Public Health", "Economic Benefits", "Urban Transport", "Air Quality"]
    },
    {
      id: 4,
      image: newsImage3,
      title: "AC Group launches new mobile app",
      description: "The new mobile application allows users to top up their Tap&Go cards directly from their phones...",
      date: "March 15, 2024",
      author: "Jean Claude Mugisha",
      category: "Technology",
      content: `
        <p>AC Group, the company behind Rwanda's popular Tap&Go transport payment system, has launched a new mobile application that significantly expands the functionality available to users.</p>
        
        <p>The app, which is available for both Android and iOS devices, allows users to manage their Tap&Go accounts, top up their cards, and access a range of new features designed to enhance the public transport experience.</p>
        
        <h3>Key Features of the New App</h3>
        
        <p>"We've developed this app based on extensive feedback from our users," said Patrick Buchana, CEO of AC Group. "The ability to top up your card directly from your phone was the most requested feature, but we've gone beyond that to create a comprehensive transport companion."</p>
        
        <p>The app includes several features that weren't previously available to Tap&Go users:</p>
        
        <p><strong>Mobile Top-up:</strong> Users can add value to their Tap&Go cards using mobile money services, credit cards, or bank transfers.</p>
        
        <p><strong>Balance Checking:</strong> Real-time balance information for Tap&Go cards linked to the user's account.</p>
        
        <p><strong>Transaction History:</strong> Detailed records of past journeys, including routes taken, fares paid, and times of travel.</p>
        
        <p><strong>Route Planning:</strong> Information on available bus routes, including estimated journey times and fare costs.</p>
        
        <p>"This app transforms the Tap&Go card from a simple payment tool into a comprehensive mobility solution," Buchana explained. "Users now have more control over their transport spending and more information to help them plan their journeys effectively."</p>
      `,
      tags: ["Mobile App", "Technology", "Digital Payments", "Public Transport", "User Experience"]
    },
    {
      id: 5,
      image: newsImage2,
      title: "Partnership announced with local transportation authority",
      description: "AC Group has signed a five-year contract to expand their services to more regions...",
      date: "April 02, 2024",
      author: "Diane Uwamahoro",
      category: "Partnership",
      content: `
        <p>AC Group has signed a significant five-year partnership agreement with the Rwanda Transport Development Agency (RTDA) to expand its digital payment and fleet management systems to intercity bus services across the country.</p>
        
        <p>The partnership, announced at a ceremony in Kigali, marks a major expansion of AC Group's services beyond urban transport in the capital city.</p>
        
        <h3>Nationwide Expansion</h3>
        
        <p>"This agreement represents a crucial step in our national transport digitization strategy," said the Director General of RTDA. "By extending the Tap&Go system to intercity routes, we're creating a more integrated, efficient, and transparent transport network that will benefit travelers throughout Rwanda."</p>
        
        <p>Under the partnership, AC Group will deploy its payment systems and tracking technology on buses operating between major cities and towns across Rwanda. The rollout will occur in phases, with key routes from Kigali to Huye, Musanze, and Rubavu being prioritized in the initial implementation.</p>
        
        <p>"We're excited to bring the benefits of digital payments and smart transport management to intercity travel," said Patrick Buchana, CEO of AC Group. "This expansion will create a seamless experience for passengers, whether they're commuting within Kigali or traveling between cities."</p>
        
        <h3>Benefits for Intercity Travelers</h3>
        
        <p>The expansion of the Tap&Go system to intercity routes offers several advantages for travelers:</p>
        
        <p><strong>Simplified Payments:</strong> Passengers can use the same Tap&Go card for both urban commutes and intercity travel.</p>
        
        <p><strong>Guaranteed Seat Reservation:</strong> The system includes seat reservation capabilities, reducing overcrowding and enhancing passenger comfort.</p>
        
        <p><strong>Real-time Information:</strong> Travelers can access up-to-date information on bus schedules, delays, and estimated arrival times.</p>
      `,
      tags: ["Government Partnership", "Intercity Transport", "Digital Infrastructure", "Rural Connectivity", "Transport Policy"]
    },
    {
      id: 6,
      image: newsImage4,
      title: "International recognition for innovative transport solutions",
      description: "AC Group has been recognized at the Global Transport Innovation Awards for their Tap&Go system...",
      date: "April 18, 2024",
      author: "Eric Mugisha",
      category: "Innovation",
      content: `
        <p>AC Group, the Rwandan technology company behind the Tap&Go digital payment system for public transport, has received international recognition at the prestigious Global Transport Innovation Awards held in Barcelona, Spain.</p>
        
        <p>The company was awarded the "Outstanding Urban Mobility Solution" prize for its innovative approach to digitizing transport payments and operations in developing markets.</p>
        
        <h3>Global Recognition</h3>
        
        <p>The Global Transport Innovation Awards recognize pioneering solutions that address critical challenges in the transport sector worldwide. AC Group's Tap&Go system was selected from over 200 entries from 45 countries.</p>
        
        <p>"This award is a testament to the innovation happening in Africa," said Patrick Buchana, CEO of AC Group, who was in Barcelona to receive the award. "We're proving that solutions developed in Rwanda can compete on the global stage and offer valuable lessons for mobility challenges around the world."</p>
        
        <p>The judging panel particularly highlighted the system's impact on improving transport efficiency in a rapidly urbanizing context, as well as its role in creating a more inclusive and accessible transport system.</p>
        
        <h3>Innovation from Rwanda to the World</h3>
        
        <p>"What impressed us about the Tap&Go system was how it addresses multiple challenges simultaneously," noted the chairperson of the awards committee. "It's not just a payment solution; it's a comprehensive approach to transport management that generates valuable data for urban planning while improving the daily experience for commuters."</p>
        
        <p>The recognition comes as AC Group continues to expand its operations both within Rwanda and to neighboring countries. The company recently began pilot projects in Tanzania and Cameroon, adapting its technology to meet local needs and conditions.</p>
      `,
      tags: ["Global Award", "Innovation", "African Tech", "Urban Mobility", "International Recognition"]
    }
  ];

  useEffect(() => {
    // Convert string ID to number
    const numericId = parseInt(id, 10);
    
    // Set loading state
    setLoading(true);
    
    // Find the news item with the matching ID
    const foundNewsItem = allNewsItems.find(item => item.id === numericId);
    
    // Find related news items (excluding the current one)
    const related = allNewsItems
      .filter(item => item.id !== numericId)
      .sort(() => 0.5 - Math.random()) // Randomly shuffle
      .slice(0, 3); // Get 3 random items
    
    // Simulate data fetching delay for demonstration
    setTimeout(() => {
      setNewsItem(foundNewsItem);
      setRelatedNews(related);
      setLoading(false);
    }, 300);
  }, [id]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubscribeStatus('Please enter a valid email address');
      return;
    }
    
    // Here you would typically send this to your backend
    console.log('Subscribed with email:', email);
    setSubscribeStatus('Thank you for subscribing!');
    setEmail('');
    
    // Clear success message after 3 seconds
    setTimeout(() => {
      setSubscribeStatus('');
    }, 3000);
  };

  // Handle share functionality
  const handleShare = (platform) => {
    const url = window.location.href;
    const title = newsItem?.title || 'AC Group News';
    
    let shareUrl;
    switch(platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
        break;
      default:
        shareUrl = '';
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  if (loading) {
    return (
      <div className="news-detail-loading">
        <div className="loading-spinner"></div>
        <p>Loading article...</p>
      </div>
    );
  }

  if (!newsItem) {
    return (
      <div className="news-detail-error">
        <h2>Article Not Found</h2>
        <p>Sorry, the article you're looking for cannot be found.</p>
        <Link to="/news" className="back-to-news">
          <ArrowLeft size={16} />
          Back to News
        </Link>
      </div>
    );
  }

  return (
    <div className="news-detail-container">
      {/* Header Section */}
      <div className="news-detail-header">
        <div className="container">
          <Link to="/" className="back-link">
            <ArrowLeft size={16} />
            <span>Back to News</span>
          </Link>
          <div className="category-badge">{newsItem.category}</div>
        </div>
      </div>

      {/* Article Hero Section */}
      <div className="article-hero">
        <div className="container">
          <h1 className="article-title">{newsItem.title}</h1>
          
          <div className="article-meta">
            <div className="meta-item">
              <Calendar size={16} />
              <span>{newsItem.date}</span>
            </div>
            <div className="meta-item">
              <User size={16} />
              <span>{newsItem.author}</span>
            </div>
          </div>
          
          <div className="article-image">
            <img src={newsItem.image} alt={newsItem.title} />
          </div>
        </div>
      </div>

      {/* Article Content Section */}
      <div className="article-content-section">
        <div className="container">
          <div className="article-layout">
            <div className="article-main">
              <div className="article-content" dangerouslySetInnerHTML={{ __html: newsItem.content }}></div>
              
              {newsItem.tags && (
                <div className="article-tags">
                  {newsItem.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              )}
              
              <div className="article-share">
                <p className="share-title"><Share2 size={16} /> Share this article</p>
                <div className="share-buttons">
                  <button onClick={() => handleShare('facebook')} className="share-button facebook">
                    <Facebook size={16} />
                  </button>
                  <button onClick={() => handleShare('twitter')} className="share-button twitter">
                    <Twitter size={16} />
                  </button>
                  <button onClick={() => handleShare('linkedin')} className="share-button linkedin">
                    <Linkedin size={16} />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="article-sidebar">
              <div className="sidebar-section">
                <h3 className="sidebar-title">Related Articles</h3>
                <div className="related-articles">
                  {relatedNews.map(item => (
                    <Link to={`/news/${item.id}`} key={item.id} className="related-article">
                      <div className="related-image">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="related-content">
                        <h4 className="related-title">{item.title}</h4>
                        <p className="related-date">{item.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="sidebar-section">
                <h3 className="sidebar-title">Subscribe to Our Newsletter</h3>
                <div className="sidebar-newsletter">
                  <p>Get the latest news and updates from AC Group delivered to your inbox.</p>
                  <form className="newsletter-form" onSubmit={handleSubscribe}>
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      value={email} 
                      onChange={handleEmailChange}
                      required 
                    />
                    <button type="submit">Subscribe</button>
                    {subscribeStatus && <p className="subscribe-status">{subscribeStatus}</p>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More News Section */}
      <div className="more-news-section">
        <div className="container">
          <h2 className="section-title">More News</h2>
          <div className="more-news-grid">
            {relatedNews.map(item => (
              <Link to={`/news/${item.id}`} key={item.id} className="news-card">
                <div className="news-card-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="news-card-content">
                  <h3 className="news-card-title">{item.title}</h3>
                  <p className="news-card-date">{item.date}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="view-all-news">
            <Link to="/" className="view-all-button">View All News</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsDetailPage;