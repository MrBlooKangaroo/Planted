import React from 'react';
import styles from './styles.css';
import {
  singleSunUnfilled,
  singleSunFilled,
  singleSunUnfilledGreen,
  singleSunFilledGreen,
} from 'assets/icons';
import { SortListItem } from '../sort-list-item';

const text = {
  alphabetical: 'A to Z',
  oldest: 'Oldest',
  newest: 'Newest',
  lowLight: 'Lowest Light',
  highLight: 'Highest Light',
  alphabeticalIcon: 'A',
  oldestIcon: '->',
  newestIcon: '<-',
};

const list = [
  {
    icon: text.alphabeticalIcon,
    description: text.alphabetical,
  },
  {
    icon: text.oldestIcon,
    description: text.oldest,
  },
  {
    icon: text.newestIcon,
    description: text.newest,
  },
  {
    icon: singleSunUnfilled,
    iconGreen: singleSunUnfilledGreen,
    description: text.lowLight,
  },
  {
    icon: singleSunFilled,
    iconGreen: singleSunFilledGreen,
    description: text.highLight,
  },
];

export const SortList = ({ setHeader, toggleShowList }) => {
  return (
    <div className={styles.sortListContainer}>
      {list &&
        list.map(listItem => (
          <SortListItem
            key={Math.random()}
            icon={listItem.icon}
            iconGreen={listItem.iconGreen}
            description={listItem.description}
            setHeader={setHeader}
            toggleShowList={toggleShowList}
          />
        ))}
    </div>
  );
};
