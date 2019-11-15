import React, { useState } from 'react';
import styles from './styles.css';
import { SortListItemText } from '../sort-list-item-text';

export const SortListItem = ({
  icon,
  description,
  iconGreen,
  setHeader,
  toggleShowList,
}) => {
  const [selected, toggleSelected] = useState(false);
  const [iconPic, changeIconPic] = useState(icon);

  function toggleHover() {
    if (iconPic.length > 5) {
      if (selected) {
        toggleSelected(!selected);
        changeIconPic(icon);
      } else {
        toggleSelected(!selected);
        changeIconPic(iconGreen);
      }
    }
  }

  return (
    <button
      className={styles.sortListButton}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onClick={() => {
        setHeader(<SortListItemText icon={icon} description={description} />);
        toggleShowList();
      }}
    >
      <SortListItemText icon={iconPic} description={description} />
    </button>
  );
};
