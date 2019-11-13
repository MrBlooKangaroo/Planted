import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { plantTypeList } from './styles.css';
import GET_PLANT_TYPES from 'api/queries/getPlantTypes';
import PlantTypeCardLarge from 'components/UI/plant-cards/PlantCardLarge';

const PlantTypeList = () => {
  const { loading, errors, data } = useQuery(GET_PLANT_TYPES);
  if (errors) debugger;
  return (
    <div className={plantTypeList}>
      {!loading &&
        !errors &&
        data.plantTypes.map(plantType => (
          <PlantTypeCardLarge key={plantType.name} {...plantType} />
        ))}
    </div>
  );
};

export default PlantTypeList;
