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
    icon: text.alphabeticalIcon,
    iconChars: text.alphabeticalIcon,
    description: text.alphabetical,
  },
  oldest: {
    icon: text.oldestIcon,
    iconChars: text.oldestIcon,
    description: text.oldest,
  },
  newest: {
    icon: text.newestIcon,
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
  const [currentlySelectedOptionName, selectOption] = useState(undefined);
  const arrowStyle = !showList ? styles.downArrow : styles.upArrow;

  const handleClickOption = optionName => {
    selectOption(optionName);
    setShowList(false);
  };

  const handleClickHeader = () => {
    setShowList(!showList);
  };

  const currentlySelectedOption =
    currentlySelectedOptionName && sortListOptions[currentlySelectedOptionName];

  return (
    <div className={styles.dropDownContainer}>
      <button className={styles.dropDownButton} onClick={handleClickHeader}>
        <div className={styles.buttonContentsContainer}>
          <div className={styles.header}>
            {currentlySelectedOption ? (
              <SortListOptionText
                {...currentlySelectedOption}
                handleClick={handleClickHeader}
              />
            ) : (
              <span className={styles.dropDownTitle}>{text.sortBy}</span>
            )}
          </div>
          <img src={arrowRight} alt={text.arrow} className={arrowStyle} />
        </div>
      </button>
      {showList && (
        <div className={styles.sortListContainer}>
          {sortListOptions &&
            Object.entries(sortListOptions).map(([key, listItemData]) => (
              <SortListOption
                description={listItemData.description}
                iconSrc={listItemData.iconSrc}
                iconChars={listItemData.iconChars}
                iconSelectedSrc={listItemData.iconSelectedSrc}
                key={key}
                identifier={key}
                selectedAlt={listItemData.selectedAlt}
                unselectedAlt={listItemData.unselectedAlt}
                handleClickOption={handleClickOption}
              />
            ))}
        </div>
      )}
    </div>
  );
};
