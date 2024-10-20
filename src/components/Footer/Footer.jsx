import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
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
        <a href="mailto:joy.ndoumathe@example.com" aria-label="Email">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://www.linkedin.com/in/joy-ndoumathe/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
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
