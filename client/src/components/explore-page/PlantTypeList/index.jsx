import React from 'react';
import { plantTypeList } from './styles.css';
import PlantTypeCardLarge from '../../UI/plant-cards/PlantCardLarge';

const PlantTypeList = ({ plantTypes }) => {
  return (
    <div className={plantTypeList}>
      {plantTypes.map(plantType => (
        <PlantTypeCardLarge key={plantType.name} {...plantType} />
      ))}
    </div>
  );
};

export default PlantTypeList;
