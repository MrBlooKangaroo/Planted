import React, { useState } from 'react';
import styles from './styles.css';
import { arrowRight } from 'assets/icons';
import { SortList } from '../sort-list';

const text = {
  downArrow: 'Arrow pull down',
  sortBy: 'Sort By',
};

export const DropDown = () => {
  const [showList, setShowList] = useState(false);
  const [header, setHeader] = useState(
    <p className={styles.dropDownTitle}>{text.sortBy}</p>,
  );
  const [arrowStyle, setArrowStyle] = useState(styles.downArrow);

  const toggleShowList = () => {
    if (showList) {
      setArrowStyle(styles.downArrow);
    } else {
      setArrowStyle(styles.upArrow);
    }
    setShowList(!showList);
  };

  return (
    <div className={styles.dropDownContainer}>
      <button className={styles.dropDownButton} onClick={toggleShowList}>
        <div className={styles.buttonContainer}>
          <p className={styles.header}>{header}</p>
          <div className={styles.arrowContainer}>
            <img src={arrowRight} alt={text.downArrow} className={arrowStyle} />
          </div>
        </div>
      </button>
      {showList && (
        <SortList setHeader={setHeader} toggleShowList={toggleShowList} />
      )}
    </div>
  );
};
