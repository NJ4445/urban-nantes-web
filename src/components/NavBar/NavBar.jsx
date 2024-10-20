import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from '../../assets/images/logo-URBAN-NANTES.png';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false); 
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <Link to="/">
                    <img src={logo} alt="Logo" className={`${styles.logo} ${isOpen ? styles.logoOpen : ''}`} />
                </Link>
            </div>
            <div className={styles.menuToggle} onClick={toggleMenu}>
                <span className={isOpen ? styles.barOpen1 : styles.bar}></span>
                <span className={isOpen ? styles.barOpen2 : styles.bar}></span>
                <span className={isOpen ? styles.barOpen3 : styles.bar}></span>
            </div>
            <ul className={`${styles.navList} ${isOpen ? styles.navListOpen : ''}`}>
                {['/', '/Projets', '/about', '/contact'].map((path, index) => {
                    const linkText = ['Accueil', 'Notre projet', 'À propos', 'Contact'][index];
                    return (
                        <li key={index} className={styles.navItem}>
                            <Link to={path} className={styles.navLink} onClick={handleLinkClick}>
                                {linkText}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavBar;
