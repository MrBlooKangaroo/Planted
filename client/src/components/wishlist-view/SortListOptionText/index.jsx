import React from 'react';
import styles from './styles.css';

export const SortListOptionText = ({
  icon,
  description,
  chosenAlt,
  iconChars,
}) => (
  <div className={styles.itemTextContainer}>
    <div className={styles.iconContainer}>
      {iconChars ? <p>{icon}</p> : <img src={icon} alt={chosenAlt} />}
    </div>
    <p>{description}</p>
  </div>
);
