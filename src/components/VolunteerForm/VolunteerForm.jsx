import React from 'react';
import styles from './VolunteerForm.module.css';

const VolunteerForm = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <form className={styles.volunteerForm} onSubmit={handleSubmit}>
      <h2>Devenir Bénévole</h2>
      <label htmlFor="name">Nom:</label>
      <input type="text" id="name" name="name" required />
      
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
      
      <label htmlFor="message">Pourquoi souhaitez-vous devenir bénévole?</label>
      <textarea id="message" name="message" required></textarea>
      
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default VolunteerForm;
