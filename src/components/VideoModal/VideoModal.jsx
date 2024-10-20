import React from 'react';
import styles from './VideoModal.module.css'; 

const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Fonction pour gérer le clic sur l'overlay
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); 
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}> 
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeButton}>X</button>
        <h2>La Frap</h2>
        <iframe
          title="La Frap Video 1"
          width="560"
          height="315"
          src="https://www.youtube.com/embed?listType=playlist&list=OLAK5uy_lZyCserZHx3cf803rVmAP5b-xzKSDt1sg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h2>La Frap 2</h2>
        <iframe
          title="La Frap Video 2"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fR9PP5hPGE8"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
