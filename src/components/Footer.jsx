import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import './Footer.css';

const InstagramIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

// Using a custom SVG for TikTok since Lucide might not have it or it's named differently sometimes
const TikTokIcon = ({ size }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content section">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <a href="#" className="logo">
              <img src="/assets/images/logo.jpg" alt="M'SIRDA Crousty Logo" className="logo-img-footer" />
            </a>
            <p className="brand-desc">
              L'adresse incontournable pour les amateurs de vrai poulet frit. Une expérience croustillante inoubliable !
            </p>
            <div className="social-links">
              <a href="https://instagram.com/msir.da13" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <InstagramIcon size={24} />
              </a>
              <a href="https://tiktok.com/@msirda.crousty" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="TikTok">
                <TikTokIcon size={24} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Contact</h3>
            <ul className="contact-list">
              <li>
                <MapPin size={20} className="icon-yellow" />
                <a 
                  href="https://maps.app.goo.gl/MH7uqdJMdg3X5VMj7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="location-link"
                >
                  Voir notre position sur Google Maps
                </a>
              </li>
              <li>
                <Phone size={20} className="icon-yellow" />
                <span>0564852966</span>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Horaires</h3>
            <ul className="hours-list">
              <li>
                <Clock size={20} className="icon-yellow" />
                <div>
                  <strong>Tous les jours :</strong>
                  <span>12h00 - 03h00</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} M'SIRDA Crousty. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
