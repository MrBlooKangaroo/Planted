import React from 'react';
import { amounts } from '../utils';
import Icon from './Icon';
import { header, subFilterList, subFilterWrapper } from './dropdown.css';

const SubFilter = props => (
  <div className={subFilterWrapper}>
    <div className={header}>
      {props.type === 'luxLevel' ? 'Light Intensity' : 'Water Frequency'}
    </div>
    <ul className={subFilterList}>
      {amounts.map(amount => (
        <Icon {...props} amount={amount} key={amount} />
      ))}
    </ul>
  </div>
);

export default SubFilter;
