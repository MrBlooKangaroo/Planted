import React from 'react';
import styles from './styles.css';
import {
  singleSunFilled,
  singleSunFilledGreen,
  singleSunUnfilled,
  singleSunUnfilledGreen,
} from 'assets/icons';
import { SortListOption } from '../SortListOption';

const text = {
  alphabetical: 'A to Z',
  alphabeticalIcon: 'A',
  highLight: 'Highest Light',
  lowLight: 'Lowest Light',
  newest: 'Newest',
  newestIcon: '<-',
  oldest: 'Oldest',
  oldestIcon: '->',
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

export const SortList = ({ toggleShowList }) => {
  return (
    <div className={styles.sortListContainer}>
      {list &&
        list.map(listItem => (
          <SortListOption
            description={listItem.description}
            icon={listItem.icon}
            iconGreen={listItem.iconGreen}
            key={listItem.description}
            toggleShowList={toggleShowList}
          />
        ))}
    </div>
  );
};
