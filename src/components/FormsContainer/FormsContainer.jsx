import React, { useState } from 'react';
import styles from './FormsContainer.module.css';
import VolunteerForm from '../VolunteerForm/VolunteerForm';
import DonationForm from '../DonationForm/DonationForm';
import PartnershipForm from '../PartnershipForm/PartnershipForm';
import Modal from '../Modal/Modal';

const actions = [
    {
        title: "Devenir bénévole",
        description: "Aidez-nous dans nos projets en tant que bénévole.",
        formType: 'volunteer'
    },
    {
        title: "Faire un don",
        description: "Soutenez notre cause en faisant un don.",
        formType: 'donation'
    },
    {
        title: "Partenariats",
        description: "Collaborez avec nous pour créer un impact plus large.",
        formType: 'partnership'
    }
];

const FormsContainer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedForm, setSelectedForm] = useState(null);

    const handleActionClick = (formType) => {
        setSelectedForm(formType);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedForm(null);
    };

    const formsMap = {
        volunteer: <VolunteerForm />,
        donation: <DonationForm />,
        partnership: <PartnershipForm />,
    };

    return (
        <section className={styles.action}>
            <h2>Agissez maintenant !</h2>
            <div className={styles.actionList}>
                {actions.map(({ title, description, formType }, index) => (
                    <div key={index} className={styles.actionItem}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <button 
                            className={styles.actionButton} 
                            onClick={() => handleActionClick(formType)}
                        >
                            En savoir plus
                        </button>
                    </div>
                ))}
            </div>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                {selectedForm && formsMap[selectedForm]}
            </Modal>
        </section>
    );
};

export default FormsContainer;
