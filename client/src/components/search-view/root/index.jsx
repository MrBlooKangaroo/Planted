import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {
  searchViewContainer,
  header,
  plantTypeListClass,
  greenText,
} from './styles.css';
import GET_PLANT_TYPES from 'api/queries/getPlantTypes';
import PlantTypeCardLarge from 'components/UI/plant-cards/PlantCardLarge';

const SearchView = () => {
  const { loading, errors, data } = useQuery(GET_PLANT_TYPES);
  const searchString = localStorage.getItem('searchString');
  const filteredPlantTypes =
    data &&
    searchString &&
    data.plantTypes.filter(plantType =>
      plantType.name.toLowerCase().includes(searchString.toLowerCase()),
    );
  return (
    <div className={searchViewContainer}>
      <div className={header}>
        Showing {data && filteredPlantTypes.length} result
        {data && filteredPlantTypes.length === 1 ? '' : 's'} for
        <span className={greenText}> "{searchString}"</span>
      </div>
      <div className={plantTypeListClass}>
        {!loading &&
          !errors &&
          data &&
          filteredPlantTypes.map(plantType => (
            <PlantTypeCardLarge key={plantType.name} {...plantType} />
          ))}
      </div>
    </div>
  );
};

export default SearchView;
