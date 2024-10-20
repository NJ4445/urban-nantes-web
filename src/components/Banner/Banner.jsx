import React from 'react';
import styles from './Banner.module.css';
import bannerImage from '../../assets/images/urban-nantes-banniere.jpg';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <img src={bannerImage} alt="Bannière Urban Nantes" className={styles.bannerImage} />
    </div>
  );
};

export default Banner;
