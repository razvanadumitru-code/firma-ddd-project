import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="flex justify-center px-4">
        <About />
      </div>
      <div className="pt-2">
        <Services />
      </div>
      <Reviews />
      <Footer />
    </div>
  );
};

export default HomePage;
