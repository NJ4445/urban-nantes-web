import React, { useState } from 'react';
import styles from './PartnershipForm.module.css';

const PartnershipForm = () => {
  const [company, setCompany] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de traitement du formulaire ici

    // Afficher le message de confirmation
    setConfirmationMessage('Votre demande de partenariat a été envoyée !');

    // Réinitialiser les champs de saisie
    setCompany('');
    setContact('');
    setEmail('');
    setMessage('');

    // Disparition du message de confirmation après 3 secondes
    setTimeout(() => {
      setConfirmationMessage('');
    }, 3000);
  };

  return (
    <div>
      <form className={styles.partnershipForm} onSubmit={handleSubmit}>
        <h2>Demande de Partenariat</h2>
        <label htmlFor="company">Nom de l'entreprise:</label>
        <input 
          type="text" 
          id="company" 
          name="company" 
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required 
        />
        
        <label htmlFor="contact">Nom du contact:</label>
        <input 
          type="text" 
          id="contact" 
          name="contact" 
          value={contact}
          onChange={(e) => setContact(e.target.value)}
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
        
        <label htmlFor="message">Message:</label>
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

export default PartnershipForm;
