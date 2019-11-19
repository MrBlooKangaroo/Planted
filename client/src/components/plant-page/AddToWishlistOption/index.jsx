import React, { useState } from 'react';
import styles from './styles.css';

export const text = {
  white: '#FFFFFF',
  black: '#000000',
  aquamarine: '#00736a',
};

export const AddToWishlistOption = ({ name }) => {
  const [isSelected, toggleIsSelected] = useState(false);
  const textColor = isSelected ? text.aquamarine : text.black;
  const backgroundColor = isSelected ? text.aquamarine : text.white;
  const styleText = { color: textColor };
  const styleBackgroundColor = { backgroundColor };

  const changeColor = () => {
    toggleIsSelected(!isSelected);
  };

  return (
    <button className={styles.wishlistItem} onClick={changeColor}>
      <div className={styles.listItemButton}>
        <div className={styles.listItem}>
          <div className={styles.smallBox} style={styleBackgroundColor} />
          <span className={styles.nookName} style={styleText}>
            {name}
          </span>
        </div>
      </div>
    </button>
  );
};
