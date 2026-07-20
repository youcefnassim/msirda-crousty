import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
  const images = [
    '/assets/images/logo.jpg',
    '/assets/images/logo.jpg',
    '/assets/images/logo.jpg',
    '/assets/images/logo.jpg',
    '/assets/images/logo.jpg',
    '/assets/images/logo.jpg'
  ];

  return (
    <section id="gallery" className="section gallery-section">
      <div className="section-header">
        <h2 className="section-title">Notre Galerie</h2>
        <p className="section-subtitle">Un aperçu de nos délicieux plats pour éveiller vos papilles.</p>
      </div>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <motion.div 
            key={index}
            className={`gallery-item item-${index + 1}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="gallery-img-wrapper">
              <img src={img} alt={`Plat M'sirda ${index + 1}`} />
              <div className="gallery-overlay">
                <span className="plus-icon">+</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
