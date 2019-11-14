import React, { useState } from 'react';
import styles from './styles.css';
import { arrowRight } from 'assets/icons';
import { SortList } from '../sort-list';

const text = {
  downArrow: 'Arrow pull down',
};

export const DropDown = () => {
  const [showList, setShowList] = useState(false);

  const toggleShowList = () => {
    setShowList(!showList);
  };

  return (
    <div className={styles.dropDownContainer}>
      <button className={styles.dropDownButton} onClick={toggleShowList}>
        <div className={styles.buttonContainer}>
          <p className={styles.dropDownTitle}>Sort By</p>
          <img
            src={arrowRight}
            alt={text.downArrow}
            className={styles.downArrow}
          />
        </div>
      </button>
      {showList && <SortList />}
    </div>
  );
};
