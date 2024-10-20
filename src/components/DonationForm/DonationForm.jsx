import React, { useState } from 'react'; 
import styles from './DonationForm.module.css';

const DonationForm = ({ onClose }) => {
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de traitement du formulaire ici

    // Afficher le message de confirmation
    setConfirmationMessage('Merci pour votre don !');

    // Réinitialiser les champs de saisie
    setAmount('');
    setMethod('');

    // Disparition du message de confirmation après 3 secondes
    setTimeout(() => {
      setConfirmationMessage('');
      onClose(); // Fermer le modal après le message
    }, 3000);
  };

  return (
    <div>
      <form className={styles.donationForm} onSubmit={handleSubmit}>
        <h2>Faire un don</h2>
        <label htmlFor="amount">Montant du don:</label>
        <input 
          type="number" 
          id="amount" 
          name="amount" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required 
        />
        
        <label htmlFor="method">Méthode de paiement:</label>
        <select 
          id="method" 
          name="method" 
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          required
        >
          <option value="">Sélectionnez une méthode</option>
          <option value="creditCard">Carte de crédit</option>
          <option value="paypal">PayPal</option>
        </select>
        
        <button type="submit">Donner</button>
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

export default DonationForm;
