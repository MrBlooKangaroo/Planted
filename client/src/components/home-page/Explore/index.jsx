import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Dropdown from './Dropdown';
import { header, chooseVibe, caretUp, caretDown } from './styles.css';

const Explore = () => {
  const [isOpen, toggle] = useState(false);
  return (
    <Fragment>
      <main className={header}>Find new plant friends.</main>
      <div className={chooseVibe} onClick={() => toggle(!isOpen)}>
        CHOOSE YOUR VIBE
        <FontAwesomeIcon
          icon={faAngleDown}
          className={isOpen ? caretUp : caretDown}
        />
      </div>
      <Dropdown isOpen={isOpen} />
    </Fragment>
  );
};

export default Explore;
