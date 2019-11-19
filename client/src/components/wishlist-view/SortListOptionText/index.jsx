import React from 'react';
import styles from './styles.css';

export const SortListOptionText = ({
  icon,
  description,
  alt,
  iconChars,
  iconSrc,
}) => {
  const iconUsed = iconSrc ? iconSrc : icon;
  return (
    <div className={styles.itemTextContainer}>
      <div className={styles.iconContainer}>
        {iconChars ? <p>{icon}</p> : <img src={iconUsed} alt={alt} />}
      </div>
      <p>{description}</p>
    </div>
  );
};
