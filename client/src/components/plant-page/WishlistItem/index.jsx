import React, { useState } from 'react';
import styles from './styles.css';

export const text = {
  black: '#FFFFFF',
  white: '#000000',
  aquamarine: '#00736a',
};

export const WishlistItem = ({ name }) => {
  const [isSelected, toggleIsSelected] = useState(false);
  const [checkBox, setCheckBox] = useState(text.black);
  const [textColor, setTextColor] = useState(text.white);
  const styleColor = { color: textColor };
  const styleBackgroundColor = { backgroundColor: checkBox };

  function ChangeColor() {
    if (!isSelected) {
      setCheckBox(text.aquamarine);
      setTextColor(text.aquamarine);
      toggleIsSelected(!isSelected);
    } else {
      setCheckBox(text.black);
      setTextColor(text.white);
      toggleIsSelected(!isSelected);
    }
  }

  return (
    <button className={styles.wishlistItem} onClick={ChangeColor}>
      <div className={styles.listItemButton}>
        <div className={styles.listItem}>
          <div className={styles.smallBox} style={styleBackgroundColor} />
          <div className={styles.nookName} style={styleColor}>
            {name}
          </div>
        </div>
      </div>
    </button>
  );
};
