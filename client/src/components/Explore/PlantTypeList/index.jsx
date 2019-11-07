import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { plantTypeList } from '../_styles/plant-type-list.css';
import GET_PLANT_TYPES from '../../../api/queries/getPlantTypes';
import PlantTypeCard from '../../UI/plant-cards/PlantCardLarge';

const PlantTypeList = () => {
  const { loading, errors, data } = useQuery(GET_PLANT_TYPES);
  return (
    <div className={plantTypeList}>
      {!loading &&
        !errors &&
        data.plantTypes.map(plantType => (
          <PlantTypeCard key={plantType.name} {...plantType} />
        ))}
    </div>
  );
};

export default PlantTypeList;
