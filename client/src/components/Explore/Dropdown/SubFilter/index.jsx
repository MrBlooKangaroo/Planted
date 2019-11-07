import React from 'react';
import levels from '../../../../constants/levels';
import FilterIcon from '../../../UI/icons/FilterIcon';
import {
  header,
  subFilterList,
  subFilterWrapper,
} from '../../_styles/dropdown.css';

export const subFilterText = {
  lightIntensity: 'Light Intensity',
  waterFrequency: 'Water Frequency',
};

const SubFilter = props => (
  <div className={subFilterWrapper}>
    <div className={header}>
      {props.type === 'luxLevel'
        ? subFilterText.lightIntensity
        : subFilterText.waterFrequency}
    </div>
    <ul className={subFilterList}>
      {levels.map(level => (
        <FilterIcon {...props} level={level} key={level} />
      ))}
    </ul>
  </div>
);

export default SubFilter;
