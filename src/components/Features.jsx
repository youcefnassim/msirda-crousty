import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Flame, Utensils, Heart, Clock } from 'lucide-react';
import './Features.css';

const Features = () => {
  const features = [
    { icon: <BadgeCheck size={40} />, title: '100% Poulet Frais', desc: 'Viande certifiée de haute qualité' },
    { icon: <Utensils size={40} />, title: 'Sauces maison', desc: 'Des recettes uniques et secrètes' },
    { icon: <Heart size={40} />, title: 'Produits faits maison', desc: 'L\'authenticité dans chaque bouchée' },
    { icon: <Clock size={40} />, title: 'Service rapide', desc: 'Chaud et prêt en un rien de temps' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="section features-section">
      <div className="section-header">
        <h2 className="section-title">Pourquoi nous ?</h2>
      </div>

      <motion.div 
        className="features-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {features.map((feature, index) => (
          <motion.div key={index} className="feature-item" variants={itemVariants}>
            <div className="feature-icon-wrapper">
              {feature.icon}
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;
