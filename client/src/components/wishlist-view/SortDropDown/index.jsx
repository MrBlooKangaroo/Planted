import React, { useState } from 'react';
import styles from './styles.css';
import { arrowRight } from 'assets/icons';
import { SortListOption } from '../SortListOption';
import { SortListOptionText } from '../SortListOptionText';
import {
  singleSunFilled,
  singleSunFilledGreen,
  singleSunUnfilled,
  singleSunUnfilledGreen,
} from 'assets/icons';

export const text = {
  arrow: 'Points down if unselected and up if selected',
  sortBy: 'Sort By',
  alphabetical: 'A to Z',
  alphabeticalIcon: 'A',
  highLight: 'Highest Light',
  highUnselectedLightAlt: 'Shows the filled sun unselected',
  highSelectedLightAlt: 'Shows the filled sun selected',
  lowLight: 'Lowest Light',
  lowUnselectedLightAlt: 'Show the unfilled sun unselected',
  lowSelectedLightAlt: 'Shows the unfilled sun selected',
  newest: 'Newest',
  newestIcon: '<-',
  oldest: 'Oldest',
  oldestIcon: '->',
};

const sortListOptions = {
  alphabetical: {
    iconChars: text.alphabeticalIcon,
    description: text.alphabetical,
  },
  oldest: {
    iconChars: text.oldestIcon,
    description: text.oldest,
  },
  newest: {
    iconChars: text.newestIcon,
    description: text.newest,
  },
  lowLight: {
    iconSrc: singleSunUnfilled,
    iconSelectedSrc: singleSunUnfilledGreen,
    description: text.lowLight,
    selectedAlt: text.lowSelectedLightAlt,
    unselectedAlt: text.lowUnselectedLightAlt,
  },
  highLight: {
    iconSrc: singleSunFilled,
    iconSelectedSrc: singleSunFilledGreen,
    description: text.highLight,
    selectedAlt: text.highSelectedLightAlt,
    unselectedAlt: text.highUnselectedLightAlt,
  },
};

export const SortDropDown = () => {
  const [showList, setShowList] = useState(false);
  const [header, setHeader] = useState();
  const arrowStyle = !showList ? styles.downArrow : styles.upArrow;

  const toggleShowList = (headerKey, icon, iconChars) => {
    if (headerKey) {
      let headerOption = (
        <SortListOptionText
          icon={icon}
          description={sortListOptions[headerKey].description}
          iconChars={iconChars}
        />
      );
      setHeader(headerOption);
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
          <p className={styles.header}>
            {header ? (
              header
            ) : (
              <span className={styles.dropDownTitle}>{text.sortBy}</span>
            )}
          </p>
          <img src={arrowRight} alt={text.arrow} className={arrowStyle} />
        </div>
      </button>
      {showList && (
        <div className={styles.sortListContainer}>
          {sortListOptions &&
            Object.entries(sortListOptions).map(([key, value]) => (
              <SortListOption
                description={value.description}
                iconSrc={value.iconSrc}
                iconChars={value.iconChars}
                iconSelectedSrc={value.iconSelectedSrc}
                key={key}
                identifier={key}
                selectedAlt={value.selectedAlt}
                unselectedAlt={value.unselectedAlt}
                toggleShowList={toggleShowList}
              />
            ))}
        </div>
      )}
    </div>
  );
};
