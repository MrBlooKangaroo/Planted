import React from 'react';
import { amounts, chooseIcon } from '../utils';
import {
  header,
  filterSelected,
  filterUnselected,
  subFilterList,
  subFilterWrapper,
} from './dropdown.css';

const SubFilter = ({ filters, setFilters, subFilterName }) => (
  <div className={subFilterWrapper}>
    <div className={header}>{subFilterName}</div>
    <ul className={subFilterList}>
      {amounts.map(amount => {
        const id = `${subFilterName[0].toLowerCase()}${subFilterName
          .slice(1)
          .trim()}:${amount}`;
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
            {chooseIcon(
              subFilterName,
              amount,
              filters.includes(id) ? filterSelected : filterUnselected,
            )}
          </li>
        );
      })}
    </ul>
  </div>
);

export default SubFilter;
