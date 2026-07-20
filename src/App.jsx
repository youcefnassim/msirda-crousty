import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specialty from './components/Specialty';
import MenuSection from './components/MenuSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Specialty />
      <MenuSection />
      <Features />
      <Testimonials />
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default App;
