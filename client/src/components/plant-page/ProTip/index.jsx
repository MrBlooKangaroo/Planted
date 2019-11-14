import React from 'react';
import styles from './styles.css';

export const ProTip = ({ icon, iconText, altContent }) => (
  <div className={styles.proTipContainer}>
    <div className={styles.iconsContainer}>
      <img src={icon} alt={altContent} />
    </div>
    <p className={styles.description}>{iconText}</p>
  </div>
);
