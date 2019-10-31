import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Card from './Card';
import { plantList } from './plantList.css';

const GET_PLANT_TYPES = gql`
  {
    plantTypes {
      name
      photoUrl
      luxLevel
    }
  }
`;
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
