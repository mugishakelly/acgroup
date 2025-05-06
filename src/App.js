import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header';
import Hero from './components/hero';
import Products from './components/product';
import Impact from './components/impact';
import News from './components/news';
import Support from './components/support';
import Footer from './components/footer';
import WhoWeAre from './pages/whoweare';
import PeoplePage from './pages/ourpeople';
import OurInsights from './pages/insights';
import CustomersPage from './pages/customer';
import TapAndGo from './pages/tapandgo';
import TapAndGoWifi from './pages/tapandgowifi';
import TapAndGoRide from './pages/tapandgoride';
import TapAndGoGreen from './pages/tapandgogreen';
import InsightsDetail from './pages/moredetails';
import NewsDetailPage from './pages/newsdetails';

function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <Impact />
      <News />
      <Support />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Header />
        <Routes>
          <Route path="/whoweare" element={<WhoWeAre />} />
          <Route path="/ourpeople" element={<PeoplePage />} />
          <Route path="/insights" element={<OurInsights />} />
          <Route path="/customer" element={<CustomersPage />} />
          <Route path="/tapandgo" element={<TapAndGo />} />
          <Route path="/tapandgowifi" element={<TapAndGoWifi />} />
          <Route path="/tapandgoride" element={<TapAndGoRide />} />
          <Route path="/tapandgogreen" element={<TapAndGoGreen />} />
          <Route path="/insights/:id" element={<InsightsDetail />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
          <Route path="/" element={<HomePage />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;