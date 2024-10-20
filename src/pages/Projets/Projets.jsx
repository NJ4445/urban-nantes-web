import React, { useEffect, useState } from 'react';  
import styles from './Projets.module.css';
import frapImage from '../../assets/images/frap-project-image.webp';  
import VideoModal from '../../components/VideoModal/VideoModal';

const Projets = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('projets-section');
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
      
      // Activez immédiatement la visibilité de la section lorsque l'élément est dans le viewport
      if (isInViewport) {
        setIsVisible(true);
        // Supprimez l'écouteur de scroll si la section est visible
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="projets-section" className={`${styles.fadeInSection} ${isVisible ? styles.active : ''}`}>
      <h2 className={styles.projetsTitle}>Notre Projet</h2>
      <img
        src={frapImage}  
        alt="Projet LA FRAP'"
        className={styles.frapImage}
      />
      <p className={styles.introText}>
        Plongez dans l'univers de <strong>LA FRAP'</strong>, une initiative innovante qui célèbre l'art urbain et la culture à Nantes. <br />
        Découvrez nos projets, rejoignez-nous en tant que bénévole, ou faites un don pour soutenir notre mission.
      </p>
      <button onClick={handleClick} className={styles.frapButton}>
        En savoir plus sur <strong>LA FRAP'</strong>
      </button>
      <VideoModal isOpen={isModalOpen} onClose={handleClose} />
    </section>
  );
};

export default Projets;
