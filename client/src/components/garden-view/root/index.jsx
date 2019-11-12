import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { GET_NOOKS_BY_USERID } from '../../../api/queries/getNooks';
import NookList from '../NookList';
import {
  gardenContainer,
  header as headerClass,
  gardenStats,
  sortMenu,
  alphaSortText,
  caretUp,
  caretDown,
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
  const [isForwardSort, toggleSort] = useState(true);
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');
  const { loading, errors, data } =
    token &&
    useQuery(
      GET_NOOKS_BY_USERID(currentUser.id, {
        context: { headers: { authorization: token } },
      }),
    );
  if (data)
    nooks = isForwardSort
      ? data.nooks.sort(sortByName)
      : data.nooks.sort(sortByName).reverse();
  const plantTotalReducer = (total, nook) => total + nook.plants.length;
  const plantTotal = data && data.nooks.reduce(plantTotalReducer, 0);

  const baseProps = {
    ...props,
    nooks,
    plantTotal,
    isForwardSort,
    toggleSort,
  };

  return !loading && !errors && <BaseGarden {...baseProps} />;
};

const BaseGarden = ({ nooks, plantTotal, isForwardSort, toggleSort }) => {
  const { header, forwardsSort, backwardsSort } = gardenText;
  return (
    <div className={gardenContainer}>
      <div className={headerClass}>{header}</div>
      <div className={gardenStats}>
        {nooks.length} nooks • {plantTotal} plants
      </div>
      <div className={sortMenu} onClick={() => toggleSort(!isForwardSort)}>
        <span className={alphaSortText}>
          {isForwardSort ? forwardsSort : backwardsSort}
        </span>
        <FontAwesomeIcon
          icon={faAngleDown}
          className={isForwardSort ? caretUp : caretDown}
        />
      </div>
      <NookList nooks={nooks} />
    </div>
  );
};

export default Garden;
