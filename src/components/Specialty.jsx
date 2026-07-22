import React from 'react';
import { motion } from 'framer-motion';
import './Specialty.css';

const Specialty = () => {
  const specialties = [
    {
      id: 1,
      name: 'Poulet Croustillant + Riz',
      description: 'Morceaux de poulet croustillant servis sur un lit de riz parfumé.',
      price: '750 DA',
      image: '/assets/images/logo.jpg'
    },
    {
      id: 2,
      name: 'Poulet Croustillant + Frites',
      description: 'Poulet croustillant avec panure maison et frites dorées.',
      price: '800 DA',
      image: '/assets/images/logo.jpg'
    },
    {
      id: 3,
      name: 'Menu : Poulet Croustillant + Riz + Boisson',
      description: 'Notre spécialité avec riz accompagnée d\'une boisson fraîche.',
      price: '800 DA',
      image: '/assets/images/logo.jpg'
    },
    {
      id: 4,
      name: 'Menu : Poulet Croustillant + Riz + Verrine Citron',
      description: 'Le menu complet avec un dessert frais pour terminer en beauté.',
      price: '950 DA',
      image: '/assets/images/logo.jpg'
    }
  ];

  return (
    <section id="specialty" className="section specialty-section">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">M'SIRDA CROUSTY</h2>
        <p className="section-subtitle">Notre poulet croustillant préparé avec une panure maison et des sauces exclusives.</p>
      </motion.div>

      <div className="specialty-grid grid-3">
        {specialties.map((item, index) => (
          <motion.div 
            key={item.id}
            className="card specialty-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="card-image-wrapper">
              <img src={item.image} alt={item.name} className="card-image" />
            </div>
            <div className="card-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="card-footer">
                <span className="price-badge">{item.price}</span>
                <a 
                  href="https://wa.me/213564852966?text=Bonjour%2C%20je%20souhaite%20passer%20une%20commande." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary btn-sm"
                  style={{ textDecoration: 'none' }}
                >
                  Commander
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Specialty;
