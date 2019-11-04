import React, { Fragment } from 'react';
import PlantList from '../__generic/PlantList';
import { header } from './garden.css';

const Garden = props => {
  return (
    <Fragment>
      <div className={header}>Garden</div>
      <PlantList {...props} />
    </Fragment>
  );
};

export default Garden;
