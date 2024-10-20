import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Affiche le message de confirmation
    setShowConfirmation(true);

    // Cache le message de confirmation après 3 secondes
    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000);

    // Réinitialise le formulaire
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Contactez-nous</h1>
      
      {showConfirmation && (
        <div className={styles.confirmationMessage}>Message envoyé avec succès!</div>
      )}

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nom:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
            autoComplete="name"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
            autoComplete="email"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.submitButton}>Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
