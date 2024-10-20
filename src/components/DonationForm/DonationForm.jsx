import React from 'react';
import styles from './DonationForm.module.css';

const DonationForm = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de traitement du formulaire ici
    onClose();
  };

  return (
    <form className={styles.donationForm} onSubmit={handleSubmit}>
      <h2>Faire un don</h2>
      <label htmlFor="amount">Montant du don:</label>
      <input type="number" id="amount" name="amount" required />
      
      <label htmlFor="method">Méthode de paiement:</label>
      <select id="method" name="method" required>
        <option value="">Sélectionnez une méthode</option>
        <option value="creditCard">Carte de crédit</option>
        <option value="paypal">PayPal</option>
      </select>
      
      <button type="submit">Donner</button>
    </form>
  );
};

export default DonationForm;
