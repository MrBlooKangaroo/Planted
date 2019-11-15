import React, { useState } from 'react';
import styles from './styles.css';
import { SortListOptionText } from '../SortListOptionText';

export const SortListOption = ({
  description,
  icon,
  iconGreen,
  toggleShowList,
}) => {
  const [selected, toggleSelected] = useState(false);
  const iconPic = selected ? iconGreen : icon;
  const headerOption = (
    <SortListOptionText icon={icon} description={description} />
  );

  function toggleHover() {
    if (iconGreen) {
      if (selected) {
        toggleSelected(!selected);
      } else {
        toggleSelected(!selected);
      }
    }
  }

  return (
    <button
      className={styles.sortListButton}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onClick={() => {
        toggleShowList(headerOption);
      }}
    >
      <SortListOptionText icon={iconPic} description={description} />
    </button>
  );
};
