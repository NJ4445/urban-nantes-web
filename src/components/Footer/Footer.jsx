import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Importation de l'icône YouTube
import styles from './Footer.module.css';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <a href="mailto:hiphopdenantes@example.com" aria-label="Email">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://www.youtube.com/@urbannantes" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FontAwesomeIcon icon={faYoutube} /> 
        </a>
        <a href="https://www.facebook.com/urbannantes/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/urban.nantes/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <p>&copy; 2024 Urban Nantes. Tous droits réservés.</p>
      <button
        className={`${styles.scrollToTopBtn} ${isVisible ? styles.visible : ''}`}
        onClick={scrollToTop}
        aria-label="Retour en haut"
      >
        &uarr;
      </button>
    </footer>
  );
}

export default Footer;
