import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Notre Spécialité', href: '#specialty' },
    { name: 'Menu', href: '#menu' },
    { name: 'Avis', href: '#testimonials' },
  ];

  return (
    <>
      <motion.nav 
        className={`navbar ${scrolled ? 'glass' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="navbar-container">
          <a href="#" className="logo">
            <img src="/assets/images/logo.jpg" alt="M'SIRDA Crousty Logo" className="logo-img" />
          </a>

          <div className="nav-links desktop-only">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </div>

          <div className="nav-actions desktop-only">
            <a href="https://wa.me/213564852966?text=Bonjour%2C%20je%20souhaite%20passer%20une%20commande." target="_blank" rel="noopener noreferrer" className="btn-primary">Commander</a>
          </div>

          <button 
            className="mobile-menu-btn mobile-only"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu glass"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <button 
              className="close-menu-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="mobile-nav-links">
              {navLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="https://wa.me/213564852966?text=Bonjour%2C%20je%20souhaite%20passer%20une%20commande." target="_blank" rel="noopener noreferrer" className="btn-primary" onClick={() => setMobileMenuOpen(false)}>
                Commander
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
