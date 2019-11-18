import React, { useState } from 'react';
import styles from './styles.css';
import { SortListOptionText } from '../SortListOptionText';

export const SortListOption = ({
  description,
  icon,
  iconSrc,
  iconChars,
  iconSelectedSrc,
  toggleShowList,
  selectedAlt,
  unselectedAlt,
  identifier,
  handleClickOption,
}) => {
  const [selected, toggleSelected] = useState(false);
  const iconStatus = iconSrc ? iconSrc : iconChars;
  const iconPic = selected ? iconSelectedSrc : iconStatus;
  const alt = selected ? unselectedAlt : selectedAlt;

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
        handleClickOption(identifier);
      }}
    >
      <SortListOptionText
        iconChars={iconChars}
        icon={iconPic}
        description={description}
        alt={alt}
      />
    </button>
  );
};
