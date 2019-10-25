import React, { Fragment } from 'react';
import { header, dropdown, caret } from './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Explore = () => (
  <Fragment>
    <main className={header}>Find new plant friends.</main>
    <div className={dropdown}>
      CHOOSE YOUR VIBE
      <FontAwesomeIcon className={caret} icon={faAngleDown} />
    </div>
  </Fragment>
);

export default Explore;
