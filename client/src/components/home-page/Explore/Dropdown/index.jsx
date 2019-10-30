import React, { useState } from 'react';
import LightIntensity from './LightIntensity';
import WaterFrequency from './WaterFrequency';
import Categories from './Categories';
import { menuOpen, menuClosed } from './styles.css';

const Dropdown = ({ isOpen }) => {
  const [filters, setFilters] = useState([]);
  const props = {
    filters,
    setFilters,
  };

  return (
    <div className={isOpen ? menuOpen : menuClosed}>
      <LightIntensity {...props} />
      {
        // <WaterFrequency {...props}/>
        // <Categories {...props}/>
      }
      {
        // filters.map(filter =>
        //     <div>{filter}</div>
        // )
      }
    </div>
  );
};

export default Dropdown;
