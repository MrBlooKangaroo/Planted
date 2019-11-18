import React, { useState } from 'react';
import styles from './styles.css';
import { SortListOptionText } from '../SortListOptionText';

export const SortListOption = ({
  description,
  iconSrc,
  iconChars,
  iconSelectedSrc,
  toggleShowList,
  selectedAlt,
  unselectedAlt,
  identifier,
  key,
}) => {
  const [selected, toggleSelected] = useState(false);
  const icon = iconSrc ? iconSrc : iconChars;
  const iconPic = selected ? iconSelectedSrc : icon;
  const chosenAlt = selected ? unselectedAlt : selectedAlt;
  const headerKey = identifier;

  const toggleHover = () => {
    if (iconSelectedSrc) {
      toggleSelected(!selected);
    }
  };

  return (
    <button
      className={styles.sortListButton}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onClick={() => {
        toggleShowList(headerKey, icon, iconChars);
      }}
    >
      <SortListOptionText
        iconSrc={iconSrc}
        iconChars={iconChars}
        icon={iconPic}
        description={description}
        chosenAlt={chosenAlt}
      />
    </button>
  );
};
