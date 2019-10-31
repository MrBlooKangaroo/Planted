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
  const [isOpen, toggle] = useState(false);
  const [filters, setFilters] = useState([]);
  const props = {
    filters,
    setFilters,
    isOpen,
  };
  return (
    <Fragment>
      <main className={header}>Find new plant friends.</main>
      <div
        className={
          filters.length > 0 ? chooseVibeFiltered : chooseVibeUnfiltered
        }
        onClick={() => toggle(!isOpen)}
      >
        CHOOSE YOUR VIBE
        <FontAwesomeIcon
          icon={faAngleDown}
          className={isOpen ? caretUp : caretDown}
        />
      </div>
      <Dropdown {...props} />
      <PlantList {...props} />
    </Fragment>
  );
};

export default Explore;
