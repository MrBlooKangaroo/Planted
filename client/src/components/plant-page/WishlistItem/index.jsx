import React, { useState } from 'react';
import styles from './styles.css';

export const hexColorCodes = {
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
  const { black, white, aquamarine } = hexColorCodes;
  const [isSelected, toggleIsSelected] = useState(false);
  const textColor = isSelected ? white : aquamarine;
  const checkBoxColor = isSelected ? black : aquamarine;

  const ChangeColor = e => {
    const nookId = e.target.id;
    if (!isSelected) {
      toggleIsSelected(!isSelected);
      setSelectedNooks([...selectedNooks, nookId]);
    } else {
      toggleIsSelected(!isSelected);
      setSelectedNooks(selectedNooks.filter(nook => nook.id !== nookId));
    }
  };

  const wishNookIds = wishes.map(wish => wish.nook && wish.nook.id);
  const wishExists = wishNookIds.includes(id);
  if (!wishExists && !isSelected) {
    toggleIsSelected(!isSelected);
  }

  const listItemClass = wishExists
    ? styles.listItemButton
    : styles.existingListItemButton;
  const styleColor = { color: textColor };
  const styleBackgroundColor = { backgroundColor: checkBoxColor };
  return (
    <button id={id} className={styles.wishlistItem} onClick={ChangeColor}>
      <div id={id} className={listItemClass}>
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
