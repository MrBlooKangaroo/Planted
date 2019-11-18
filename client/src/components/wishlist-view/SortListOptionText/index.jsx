import React from 'react';
import styles from './styles.css';

export const SortListOptionText = ({ icon, description, chosenAlt }) => (
  <div className={styles.itemTextContainer}>
    <div className={styles.iconContainer}>
      {icon.length < 10 ? <p>{icon}</p> : <img src={icon} alt={chosenAlt} />}
    </div>
    <p>{description}</p>
  </div>
);
