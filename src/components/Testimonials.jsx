import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: 'Amine K.',
      text: 'Le meilleur poulet frit que j\'ai mangé ! La panure est incroyable et le poulet est super tendre à l\'intérieur.',
      date: 'Il y a 2 jours'
    },
    {
      id: 2,
      name: 'Sarah B.',
      text: 'Service rapide, personnel accueillant et la sauce M\'SIRDA CROUSTY est une merveille. Je recommande à 100% !',
      date: 'Il y a 1 semaine'
    },
    {
      id: 3,
      name: 'Walid M.',
      text: 'Enfin un vrai bon fast-food avec une qualité constante. Leurs burgers sont généreux et délicieux.',
      date: 'Il y a 3 semaines'
    }
  ];

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="section-header">
        <h2 className="section-title">Ce qu'ils en pensent</h2>
        <p className="section-subtitle">L'avis de nos clients est notre plus grande fierté.</p>
      </div>

      <div className="testimonials-grid grid-3">
        {reviews.map((review, index) => (
          <motion.div 
            key={review.id}
            className="testimonial-card card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="var(--color-yellow)" color="var(--color-yellow)" />
              ))}
            </div>
            <p className="testimonial-text">"{review.text}"</p>
            <div className="testimonial-author">
              <h4>{review.name}</h4>
              <span>{review.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
