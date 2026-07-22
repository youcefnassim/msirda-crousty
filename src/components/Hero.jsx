import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content section">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1>
            <span className="text-yellow">Le croustillant</span> <br />
            qui rassemble.
          </h1>
          <p>Découvrez l'expérience ultime du poulet frit. Une panure secrète, un goût authentique et une qualité irréprochable.</p>
          
          <div className="hero-buttons">
            <a href="https://wa.me/213564852966?text=Bonjour%2C%20je%20souhaite%20passer%20une%20commande." target="_blank" rel="noopener noreferrer" className="btn-primary">
              Commander
            </a>
            <a href="#menu" className="btn-secondary">
              Voir le menu <ChevronRight size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img src="/assets/images/logo.jpg" alt="M'SIRDA Crousty Logo" className="hero-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
