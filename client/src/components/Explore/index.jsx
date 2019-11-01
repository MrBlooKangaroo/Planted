import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Dropdown from './Dropdown';
import PlantList from './PlantList';
import {
  header,
  chooseVibeFiltered,
  chooseVibeUnfiltered,
  caretUp,
  caretDown,
} from './explore.css';

const Explore = () => {
  const [isOpen, toggleDropdown] = useState(false);
  const [filters, setFilters] = useState([]);
  const props = {
    filters,
    setFilters,
    isOpen,
  };
  return (
    <Fragment>
      <div className={header}>Find new plant friends.</div>
      <div
        onClick={() => toggleDropdown(!isOpen)}
        className={
          filters.length > 0 ? chooseVibeFiltered : chooseVibeUnfiltered
        }
      >
        CHOOSE YOUR VIBE
        <FontAwesomeIcon
          icon={faAngleDown}
          className={isOpen ? caretUp : caretDown}
        />
      </div>
      {isOpen ? <Dropdown {...props} /> : null}
      <PlantList {...props} />
    </Fragment>
  );
};

export default Explore;
