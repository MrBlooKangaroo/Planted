import React, { useState } from 'react';
import styles from './styles.css';

export const text = {
  black: '#FFFFFF',
  white: '#000000',
  aquamarine: '#00736a',
};

export const WishlistItem = ({
  id,
  name,
  wishes,
  selectedNooks,
  setSelectedNooks,
}) => {
  const [isSelected, toggleIsSelected] = useState(false);
  const [checkBox, setCheckBox] = useState(text.black);
  const [textColor, setTextColor] = useState(text.white);
  const styleColor = { color: textColor };
  const styleBackgroundColor = { backgroundColor: checkBox };

  const wishNookIds = wishes.map(wish => wish.nook && wish.nook.id);
  if (wishNookIds.includes(id) && !isSelected) {
    setCheckBox(text.aquamarine);
    setTextColor(text.aquamarine);
    toggleIsSelected(!isSelected);
  }

  const ChangeColor = e => {
    const nookId = e.target.id;
    if (!isSelected) {
      setCheckBox(text.aquamarine);
      setTextColor(text.aquamarine);
      toggleIsSelected(!isSelected);
      setSelectedNooks([...selectedNooks, nookId]);
    } else {
      setCheckBox(text.black);
      setTextColor(text.white);
      toggleIsSelected(!isSelected);
      setSelectedNooks(selectedNooks.filter(nook => nook.id !== nookId));
    }
  };

  return (
    <button id={id} className={styles.wishlistItem} onClick={ChangeColor}>
      <div id={id} className={styles.listItemButton}>
        <div id={id} className={styles.listItem}>
          <div
            id={id}
            className={styles.smallBox}
            style={styleBackgroundColor}
          />
          <div id={id} className={styles.nookName} style={styleColor}>
            {name}
          </div>
        </div>
      </div>
    </button>
  );
};
