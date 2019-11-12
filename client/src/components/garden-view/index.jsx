import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { GET_NOOKS_BY_USERID } from '../../api/queries/getNooks';
import NookCardSmall from '../UI/nook-cards/NookCardSmall';
import {
  gardenContainer,
  header as headerClass,
  subHeaderWrapper,
  gardenStats,
  sortMenu,
  alphaSortText,
  caretUp,
  caretDown,
  nooksContainer,
} from './styles.css';

export const gardenText = {
  header: 'Garden',
  forwardsSort: 'A to Z',
  backwardsSort: 'Z to A',
};

export const sortByName = (a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
};

const Garden = props => {
  let nooks = [];
  const [isDropdownOpen, toggleDropdown] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const { loading, errors, data } = useQuery(
    GET_NOOKS_BY_USERID(currentUser.id),
  );
  if (data)
    nooks = isDropdownOpen
      ? data.nooks.sort(sortByName)
      : data.nooks.sort(sortByName).reverse();
  const plantTotalReducer = (total, nook) => total + nook.plants.length;
  const plantTotal = data && data.nooks.reduce(plantTotalReducer, 0);

  const baseProps = {
    ...props,
    nooks,
    plantTotal,
    isDropdownOpen,
    toggleDropdown,
  };

  return !loading && !errors && <BaseGarden {...baseProps} />;
};

const BaseGarden = ({ nooks, plantTotal, isDropdownOpen, toggleDropdown }) => {
  const { header, forwardsSort, backwardsSort } = gardenText;
  return (
    <div className={gardenContainer}>
      <div className={headerClass}>{header}</div>
      <div className={gardenStats}>
        {nooks.length} nooks • {plantTotal} plants
      </div>
      <div className={sortMenu} onClick={() => toggleDropdown(!isDropdownOpen)}>
        <span className={alphaSortText}>
          {isDropdownOpen ? forwardsSort : backwardsSort}
        </span>
        <FontAwesomeIcon
          icon={faAngleDown}
          className={isDropdownOpen ? caretUp : caretDown}
        />
      </div>
      <div className={nooksContainer}>
        {nooks.map(nook => (
          <NookCardSmall key={nook.name} {...nook} />
        ))}
      </div>
    </div>
  );
};

export default Garden;
