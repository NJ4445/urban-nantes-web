import React from 'react';
import styles from './Actions.module.css'; 
import ActionsSection from '../../components/ActionsSection/ActionsSection'; 

const Actions = () => {
  return (
    <div className={styles.actionsContainer}>
      <ActionsSection /> 
    </div>
  );
};

export default Actions;
