import React from 'react';
import styles from './styles.css';

export const SortListItemText = ({ icon, description }) => (
  <div className={styles.itemTextContainer}>
    <div className={styles.iconContainer}>
      {icon.length < 10 ? <p>{icon}</p> : <img src={icon} alt="icon" />}
    </div>
    <p>{description}</p>
  </div>
);
