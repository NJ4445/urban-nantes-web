import React, { useState } from 'react';
import styles from './VolunteerForm.module.css';

const VolunteerForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de traitement du formulaire ici

    // Afficher le message de confirmation
    setConfirmationMessage('Merci de vouloir devenir bénévole !');

    // Réinitialiser les champs de saisie
    setName('');
    setEmail('');
    setMessage('');

    // Disparition du message de confirmation après 3 secondes
    setTimeout(() => {
      setConfirmationMessage('');
      onClose(); // Fermer le modal après le message
    }, 3000);
  };

  return (
    <div>
      <form className={styles.volunteerForm} onSubmit={handleSubmit}>
        <h2>Devenir Bénévole</h2>
        <label htmlFor="name">Nom:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required 
        />
        
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        
        <label htmlFor="message">Pourquoi souhaitez-vous devenir bénévole?</label>
        <textarea 
          id="message" 
          name="message" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        
        <button type="submit">Envoyer</button>
      </form>

      {/* Message de confirmation */}
      {confirmationMessage && (
        <div className={styles.confirmationMessage}>
          {confirmationMessage}
        </div>
      )}
    </div>
  );
};

export default VolunteerForm;
