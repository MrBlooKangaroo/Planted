import React from 'react';
import { plantTypeList } from './styles.css';
import PlantCardLarge from 'components/UI/plant-cards/PlantCardLarge';

const PlantTypeList = ({ plantTypes }) => {
  return (
    <div className={plantTypeList}>
      {plantTypes &&
        plantTypes.map(plantType => (
          <PlantCardLarge key={plantType.name} {...plantType} />
        ))}
    </div>
  );
};

export default PlantTypeList;
