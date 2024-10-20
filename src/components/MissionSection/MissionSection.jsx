import React from 'react';
import styles from './MissionSection.module.css';
import missionImage from '../../assets/images/mission.webp'; // Importation d'une image

const MissionSection = () => {
  return (
    <section className={styles.mission}>
      <h2 className={styles.title}>Notre Mission</h2>
      <img src={missionImage} alt="Notre mission" className={styles.missionImage} />
      <p className={styles.description}>
        Mettre en lumière la richesse et la diversité de la scène urbaine locale à travers des événements et projets variés.
      </p>
      <div className={styles.missionListContainer}>
        <ul className={styles.missionList}>
          <li>🎨 Promouvoir l’art urbain dans les quartiers de Nantes.</li>
          <li>🧑‍🎤 Donner aux jeunes artistes locaux une plateforme pour s'exprimer.</li>
          <li>🏙️ Transformer les espaces publics en galeries à ciel ouvert.</li>
        </ul>
      </div>
    </section>
  );
};

export default MissionSection;
