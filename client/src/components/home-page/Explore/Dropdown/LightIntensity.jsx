import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun as sunWhole } from '@fortawesome/free-solid-svg-icons';
import { faSun as sunHollow } from '@fortawesome/free-regular-svg-icons';
import { amounts } from './utils';
import {
  intensityList,
  intensityListItem,
  lightIntensity,
  lightIntensityHeader,
  sunWholeClass,
  sunHollowClass,
  intensityListItemSelected,
} from './styles.css';

const LightIntensity = ({ filters, setFilters }) => {
  const onIntensityClick = e => {
    const filter = e.target.id === '' ? e.target.parentElement.id : e.target.id;
    filters.includes(filter)
      ? setFilters(filters.filter(f => f !== filter))
      : setFilters([...filters, filter]);
  };

  return (
    <div className={lightIntensity}>
      <div className={lightIntensityHeader}>Light Intensity</div>
      <ul className={intensityList}>
        {amounts.map((intensity, index) => {
          const id = `light-${intensity}`;
          return (
            <li
              id={id}
              key={intensity}
              className={
                filters.includes(id)
                  ? intensityListItemSelected
                  : intensityListItem
              }
              onClick={onIntensityClick}
            >
              {[...new Array(index + 1)].map((_, i) => (
                <FontAwesomeIcon
                  id={id}
                  key={i}
                  icon={sunWhole}
                  className={sunWholeClass}
                />
              ))}
              {[...new Array(3 - (index + 1))].map((_, i) => (
                <FontAwesomeIcon
                  id={id}
                  key={i}
                  icon={sunHollow}
                  className={sunHollowClass}
                />
              ))}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LightIntensity;
