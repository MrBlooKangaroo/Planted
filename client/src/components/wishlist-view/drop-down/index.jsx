import React, { useState } from 'react';
import styles from './styles.css';
import { arrowRight } from 'assets/icons';
import { SortList } from '../sort-list';

const text = {
  downArrow: 'Arrow pull down',
};

export const DropDown = () => {
  const [showList, setShowList] = useState(false);
  const [header, setHeader] = useState('Sort By');

  const toggleShowList = () => {
    setShowList(!showList);
  };

  return (
    <div className={styles.dropDownContainer}>
      <button className={styles.dropDownButton} onClick={toggleShowList}>
        <div className={styles.buttonContainer}>
          <p className={styles.header}>{header}</p>
          <div>
            <img
              src={arrowRight}
              alt={text.downArrow}
              className={styles.downArrow}
            />
          </div>
        </div>
      </button>
      {showList && (
        <SortList setHeader={setHeader} toggleShowList={toggleShowList} />
      )}
    </div>
  );
};
