import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MenuSection.css';

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('burgers');

  const categories = [
    { id: 'burgers', name: 'Burgers' },
    { id: 'bowls', name: 'Bowls sur Riz' },
    { id: 'salads', name: 'Salades' },
    { id: 'snacks', name: 'Coin Snack' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'drinks', name: 'Boissons' }
  ];

  const menuItems = {
    burgers: [
      { name: 'Cheese Burger', price: '450 DA', image: '/assets/images/logo.jpg' },
      { name: 'Crispy Burger', price: '550 DA', image: '/assets/images/logo.jpg' },
      { name: 'Chicken Burger', price: '600 DA', image: '/assets/images/logo.jpg' }
    ],
    bowls: [
      { name: 'Bowl M\'SIRDA Crousty', price: '800 DA', image: '/assets/images/logo.jpg' },
      { name: 'Bowl Crousty Salé', price: '850 DA', image: '/assets/images/logo.jpg' },
      { name: 'Bowl Crousty Sucré', price: '900 DA', image: '/assets/images/logo.jpg' }
    ],
    salads: [
      { name: 'César', price: '400 DA', image: '/assets/images/logo.jpg' },
      { name: 'Healthy', price: '450 DA', image: '/assets/images/logo.jpg' },
      { name: 'Niçoise', price: '500 DA', image: '/assets/images/logo.jpg' },
      { name: 'Méditerranéenne', price: '450 DA', image: '/assets/images/logo.jpg' }
    ],
    snacks: [
      { name: 'Pizza', price: '250 DA', image: '/assets/images/logo.jpg' },
      { name: 'Pizza Carré', price: '150 DA', image: '/assets/images/logo.jpg' },
      { name: 'Baguette', price: '200 DA', image: '/assets/images/logo.jpg' },
      { name: 'Quiche', price: '180 DA', image: '/assets/images/logo.jpg' },
      { name: 'Soufflé', price: '150 DA', image: '/assets/images/logo.jpg' },
      { name: 'Manchon', price: '120 DA', image: '/assets/images/logo.jpg' }
    ],
    desserts: [
      { name: 'Cheesecake', price: '350 DA', image: '/assets/images/logo.jpg' },
      { name: 'Verrines', price: '250 DA', image: '/assets/images/logo.jpg' },
      { name: 'Tiramisu', price: '300 DA', image: '/assets/images/logo.jpg' },
      { name: 'Mousse au chocolat', price: '250 DA', image: '/assets/images/logo.jpg' },
      { name: 'Churros', price: '200 DA', image: '/assets/images/logo.jpg' }
    ],
    drinks: [
      { name: 'Coca-Cola', price: '100 DA', image: '/assets/images/logo.jpg' },
      { name: 'Sprite', price: '100 DA', image: '/assets/images/logo.jpg' },
      { name: 'Fanta', price: '100 DA', image: '/assets/images/logo.jpg' },
      { name: 'Eau Minérale', price: '50 DA', image: '/assets/images/logo.jpg' },
      { name: 'Jus d\'Orange', price: '150 DA', image: '/assets/images/logo.jpg' }
    ]
  };

  return (
    <section id="menu" className="section menu-section">
      <div className="section-header">
        <h2 className="section-title">Notre Menu</h2>
        <p className="section-subtitle">Découvrez une large sélection de plats préparés avec passion et savoir-faire.</p>
      </div>

      <div className="menu-tabs">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`tab-btn ${activeTab === category.id ? 'active' : ''}`}
            onClick={() => setActiveTab(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <motion.div layout className="menu-grid grid-4">
        <AnimatePresence mode="popLayout">
          {menuItems[activeTab].map((item, index) => (
            <motion.div
              key={`${activeTab}-${index}`}
              className="menu-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className="menu-card-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="menu-card-content">
                <h4>{item.name}</h4>
                <span className="menu-price">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default MenuSection;
