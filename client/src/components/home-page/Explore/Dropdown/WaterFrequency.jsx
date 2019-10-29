import React, { Fragment } from 'react';
import { amounts } from './utils';
import {
  levelList,
  levelListItem,
  waterFrequency,
  waterFrequencyHeader,
} from './styles.css';

const WaterFrequency = ({ filters, editFilters }) => {
  return (
    <div className={waterFrequency}>
      <h2 className={waterFrequencyHeader}>Water Frequency</h2>
      <ul className={levelList}>
        {amounts.map((level, index) => (
          <li
            id={`water-${level}`}
            key={level}
            className={levelListItem}
            onClick={({ target }) => {
              filters.includes(target.id)
                ? editFilters(filters.filter(f => f !== target.id))
                : editFilters(filters.push(target.id));
            }}
          >
            {new Array(index + 1).map((_, i) => (
              <div key={i}>X</div>
            ))}
            {new Array(3 - (index + 1)).map((_, i) => (
              <div key={i}>O</div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WaterFrequency;
