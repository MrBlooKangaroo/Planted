import React, { useState } from 'react';
import styles from './styles.css';

export const WishListItem = ({ name }) => {
  const [isSelected, toggleIsSelected] = useState(false);
  const [checkBox, setCheckBox] = useState('#FFFFFF');
  const [textColor, setTextColor] = useState('#000000');
  const styleColor = { color: textColor };
  const styleBackgroundColor = { backgroundColor: checkBox };

  function ChangeColor() {
    if (!isSelected) {
      console.log('Hello');
      setCheckBox('#00736a');
      setTextColor('#00736a');
      toggleIsSelected(!isSelected);
    } else {
      setCheckBox('#FFFFFF');
      setTextColor('#000000');
      toggleIsSelected(!isSelected);
    }
  }

  return (
    <button className={styles.wishListItem} onClick={ChangeColor}>
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
