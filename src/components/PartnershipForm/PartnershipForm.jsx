import React from 'react';
import styles from './PartnershipForm.module.css';

const PartnershipForm = () => {
  return (
    <form className={styles.partnershipForm}>
      <h2>Demande de Partenariat</h2>
      <label htmlFor="company">Nom de l'entreprise:</label>
      <input type="text" id="company" name="company" required />
      
      <label htmlFor="contact">Nom du contact:</label>
      <input type="text" id="contact" name="contact" required />
      
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
      
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
      
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default PartnershipForm;
