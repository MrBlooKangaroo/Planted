import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { plantList } from './plantList.css';
import { GET_PLANT_TYPES } from '../../Explore/utils';
import Card from './Card';

const PlantList = props => {
  const { loading, errors, data } = useQuery(GET_PLANT_TYPES);
  return (
    <div className={plantList}>
      {!loading && !errors
        ? data.plantTypes.map(plantType => (
            <Card {...props} key={plantType.name} plantType={plantType} />
          ))
        : null}
    </div>
  );
};

export default PlantList;
