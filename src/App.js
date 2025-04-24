import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Products from './components/product';
import Impact from './components/impact';
import News from './components/news';
import Support from './components/support';
import Footer from './components/footer';


function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Products />
      <Impact />
      <News />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
