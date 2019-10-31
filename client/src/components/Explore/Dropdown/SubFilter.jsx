import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { amounts } from './utils';
import {
  header,
  gridItemOn,
  gridItemOff,
  filterSelected,
  filterUnselected,
  subFilterList,
  subFilterWrapper,
} from './dropdown.css';

const SubFilter = ({
  filters,
  setFilters,
  subFilterName,
  gridIconOn,
  gridIconOff,
}) => (
  <div className={subFilterWrapper}>
    <div className={header}>{subFilterName}</div>
    <ul className={subFilterList}>
      {amounts.map((amount, index) => {
        const id =
          `${subFilterName[0].toLowerCase()}` +
          `${subFilterName.slice(1).trim()}` +
          `:${amount}`;
        return (
          <li
            id={id}
            key={id}
            onClick={e => {
              const filter =
                e.target.id === '' ? e.target.parentElement.id : e.target.id;
              filters.includes(filter)
                ? setFilters(filters.filter(f => f !== filter))
                : setFilters([...filters, filter]);
            }}
            className={filters.includes(id) ? filterSelected : filterUnselected}
          >
            {[...new Array(index + 1)].map((_, i) => (
              <FontAwesomeIcon
                id={id}
                key={i}
                icon={gridIconOn}
                className={gridItemOn}
              />
            ))}
            {[...new Array(3 - (index + 1))].map((_, i) => (
              <FontAwesomeIcon
                id={id}
                key={i}
                icon={gridIconOff}
                className={gridItemOff}
              />
            ))}
          </li>
        );
      })}
    </ul>
  </div>
);

export default SubFilter;
