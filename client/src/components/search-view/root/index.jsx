import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {
  searchViewContainer,
  header,
  plantTypeListClass,
  greenText,
} from './styles.css';
import GET_PLANT_TYPES from 'api/queries/getPlantTypes';
import PlantCardLarge from '../../UI/plant-cards/PlantCardLarge';

const SearchView = () => {
  let headerText = '';
  const { data } = useQuery(GET_PLANT_TYPES);
  const searchString = localStorage.getItem('searchString');
  const filteredPlantTypes =
    data &&
    searchString &&
    data.plantTypes.filter(plantType =>
      plantType.name.toLowerCase().includes(searchString.toLowerCase()),
    );
  if (data)
    headerText = `Showing ${filteredPlantTypes.length} result${
      filteredPlantTypes.length === 1 ? '' : 's'
    } for `;
  return (
    <div className={searchViewContainer}>
      {data && (
        <>
          <h1 className={header}>
            {headerText}
            <span className={greenText}> "{searchString}"</span>
          </h1>
          <div className={plantTypeListClass}>
            {filteredPlantTypes.map(plantType => (
              <PlantCardLarge key={plantType.name} {...plantType} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchView;
