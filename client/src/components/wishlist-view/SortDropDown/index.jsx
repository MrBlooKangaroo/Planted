import React, { useState } from 'react';
import styles from './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { arrowRight } from 'assets/icons';
import { SortList } from '../SortList';

export const text = {
  arrow: 'Points down if unselected and up if selected',
  sortBy: 'Sort By',
};

export const SortDropDown = () => {
  const defaultHeader = (
    <span className={styles.dropDownTitle}>{text.sortBy}</span>
  );
  const [showList, setShowList] = useState(false);
  const [header, setHeader] = useState(defaultHeader);
  const arrowStyle = !showList ? styles.downArrow : styles.upArrow;

  const toggleShowList = headerValue => {
    if (headerValue) {
      setHeader(headerValue);
    }
    setShowList(!showList);
  };

  return (
    <div className={styles.dropDownContainer}>
      <button
        className={styles.dropDownButton}
        onClick={() => toggleShowList()}
      >
        <div className={styles.buttonContentsContainer}>
          <p className={styles.header}>{header}</p>
          <img src={arrowRight} alt={text.arrow} className={arrowStyle} />
        </div>
      </button>
      {showList && <SortList toggleShowList={toggleShowList} />}
    </div>
  );
};
