import React, { Fragment } from 'react';
import PlantCardSmall from '../UI/plant-cards/PlantCardSmall';
import { header } from './styles.css';

const Garden = props => {
  return (
    <Fragment>
      <div className={header}>Garden</div>
      <PlantCardSmall {...props} />
    </Fragment>
  );
};

export default Garden;
