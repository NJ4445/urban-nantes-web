import React from 'react';
import styles from './About.module.css';
import aboutImage from '../../assets/images/about-image.webp'; 

const About = () => {
  return (
    <div className={styles.about}>
      <h2>À propos de nous</h2>
      <img src={aboutImage} alt="À propos de nous" className={styles.aboutImage} />
      <p>
        Nous sommes une équipe passionnée par l'art urbain et la culture, basée à Nantes. Notre objectif est de rassembler des artistes locaux pour créer un impact positif dans nos quartiers à travers des projets artistiques collaboratifs.
      </p>
      <p>
        En savoir plus sur notre mission, nos événements et comment vous pouvez participer en tant que bénévole ou artiste.
      </p>
    </div>
  );
};

export default About;
