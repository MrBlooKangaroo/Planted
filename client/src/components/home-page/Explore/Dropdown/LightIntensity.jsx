import React from 'react';
import { amounts } from './utils';
import {
  intensityList,
  intensityListItem,
  lightIntensity,
  lightIntensityHeader,
  sunWhole,
  sunHollow,
} from './styles.css';

const LightIntensity = ({ filters, editFilters }) => (
  <div className={lightIntensity}>
    <dic className={lightIntensityHeader}>Light Intensity</dic>
    <ul className={intensityList}>
      {amounts.map((intensity, index) => (
        <li
          id={`light-${intensity}`}
          key={intensity}
          className={intensityListItem}
          onClick={({ target }) =>
            filters.includes(target.id)
              ? editFilters(filters.filter(f => f !== target.id))
              : editFilters(filters.push(target.id))
          }
        >
          {[...new Array(index + 1)].map((_, i) => (
            <div className={sunWhole} key={i}>
              X
            </div>
          ))}
          {[...new Array(3 - (index + 1))].map((_, i) => (
            <div className={sunHollow} key={i}>
              O
            </div>
          ))}
        </li>
      ))}
    </ul>
  </div>
);

export default LightIntensity;
