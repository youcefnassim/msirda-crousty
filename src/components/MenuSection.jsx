import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MenuSection.css';

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('salads');

  const categories = [
    { id: 'salads', name: 'Salades' },
    { id: 'snacks', name: 'Coin Snack' },
    { id: 'sides', name: 'Accompagnements' },
    { id: 'sauces', name: 'Sauces Maison' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'drinks', name: 'Boissons' }
  ];

  const menuItems = {
    salads: [
      { name: 'Salade César', price: '550 DA', image: '/assets/images/logo.jpg' },
      { name: 'Salade Healthy', price: '450 DA', image: '/assets/images/logo.jpg' },
      { name: 'Salade Niçoise', price: '400 DA', image: '/assets/images/logo.jpg' }
    ],
    snacks: [
      { name: 'Pizza Carrée', price: '100 DA', image: '/assets/images/logo.jpg' },
      { name: 'Quiche', price: '150 DA', image: '/assets/images/logo.jpg' },
      { name: 'Soufflé', price: '150 DA', image: '/assets/images/logo.jpg' },
      { name: 'Mouchan de Fromage', price: '150 DA', image: '/assets/images/logo.jpg' }
    ],
    sides: [
      { name: 'Frites', price: '200 DA', image: '/assets/images/logo.jpg' },
      { name: 'Riz', price: '350 DA', image: '/assets/images/logo.jpg' }
    ],
    sauces: [
      { name: 'Sauce M\'SIRDA (Signature)', price: '-', image: '/assets/images/logo.jpg' },
      { name: 'Sauce Algérienne', price: '-', image: '/assets/images/logo.jpg' },
      { name: 'Sauce Ail', price: '-', image: '/assets/images/logo.jpg' },
      { name: 'Sauce Fromagère', price: '-', image: '/assets/images/logo.jpg' },
      { name: 'Sauce Honey Mustard', price: '-', image: '/assets/images/logo.jpg' },
      { name: 'Sauce Harissa', price: '-', image: '/assets/images/logo.jpg' },
      { name: 'Sauce Barbecue', price: '-', image: '/assets/images/logo.jpg' },
      { name: 'Sauce Sweet Chili', price: '-', image: '/assets/images/logo.jpg' }
    ],
    desserts: [
      { name: 'Cheesecake Lotus', price: '450 DA', image: '/assets/images/logo.jpg' },
      { name: 'Tiramisu (Petit format)', price: '350 DA', image: '/assets/images/logo.jpg' },
      { name: 'Tiramisu (Grand format)', price: '650 DA', image: '/assets/images/logo.jpg' },
      { name: 'Verrines (Citron)', price: '130 DA', image: '/assets/images/logo.jpg' },
      { name: 'Mousse au chocolat', price: '200 DA', image: '/assets/images/logo.jpg' },
      { name: 'Dubai Pistache (Petit format)', price: '400 DA', image: '/assets/images/logo.jpg' },
      { name: 'Dubai Pistache (Grand format)', price: '800 DA', image: '/assets/images/logo.jpg' }
    ],
    drinks: [
      { name: 'IZEM Canette (25 cl)', price: '150 DA', image: '/assets/images/logo.jpg' },
      { name: 'Eau Minérale SAIDA (50 cl)', price: '50 DA', image: '/assets/images/logo.jpg' },
      { name: 'Coca-Cola (30 cl)', price: '80 DA', image: '/assets/images/logo.jpg' }
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
