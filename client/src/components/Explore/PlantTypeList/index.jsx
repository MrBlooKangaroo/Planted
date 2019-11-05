import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { plantTypeList } from './plantTypeList.css';
import GET_PLANT_TYPES from '../../../api/queries/getPlantTypes';
import PlantTypeCard from './PlantTypeCard';

const PlantTypeList = () => {
  const { loading, errors, data } = useQuery(GET_PLANT_TYPES);
  return (
    <div className={plantTypeList}>
      {!loading &&
        !errors &&
        data.plantTypes.map(plantType => (
          <PlantTypeCard key={plantType.name} plantType={plantType} />
        ))}
    </div>
  );
};

export default PlantTypeList;
