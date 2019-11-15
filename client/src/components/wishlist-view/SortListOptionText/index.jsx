import React from 'react';
import styles from './styles.css';

export const text = {
  photoUsed:
    'Photo either filled or unfilled sun and black or green depending on being hovered',
};

export const SortListOptionText = ({ icon, description }) => (
  <div className={styles.itemTextContainer}>
    <div className={styles.iconContainer}>
      {icon.length < 10 ? (
        <p>{icon}</p>
      ) : (
        <img src={icon} alt={text.photoUsed} />
      )}
    </div>
    <p>{description}</p>
  </div>
);
