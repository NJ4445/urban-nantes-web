import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Error.module.css';

const Error = () => {
  return (
    <div className={styles.errorContainer}>
      <h1>404 - Page Not Found</h1>
      <p>Désolé, la page que vous recherchez n'existe pas.</p>
      <Link to="/">Retour à la page d'accueil</Link>
    </div>
  );
};

export default Error;
