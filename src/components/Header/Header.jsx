import React from 'react';
import styles from './Header.module.css';
import bannerImage from '../../assets/images/urban-nantes-banniere.jpg'; 

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={bannerImage} alt="Logo Urban Nantes" className={styles.bannerImage} />
    </header>
  );
};

export default Header;
