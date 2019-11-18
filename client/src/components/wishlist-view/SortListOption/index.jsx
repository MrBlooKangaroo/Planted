import React, { useState } from 'react';
import styles from './styles.css';
import { SortListOptionText } from '../SortListOptionText';

export const SortListOption = ({
  description,
  icon,
  iconSelectedSrc,
  toggleShowList,
  selectedAlt,
  unselectedAlt,
}) => {
  const [selected, toggleSelected] = useState(false);
  const iconPic = selected ? iconSelectedSrc : icon;
  const chosenAlt = selected ? unselectedAlt : selectedAlt;
  const headerOption = (
    <SortListOptionText icon={icon} description={description} />
  );

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
        toggleShowList(headerOption);
      }}
    >
      <SortListOptionText
        icon={iconPic}
        description={description}
        chosenAlt={chosenAlt}
      />
    </button>
  );
};
