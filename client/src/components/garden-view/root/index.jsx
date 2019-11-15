import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_NOOKS_BY_USER_ID } from 'api/queries/getNooks';
import HeaderRow from '../HeaderRow';
import { gardenContainer } from './styles.css';

export const sortByNookName = (a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
};

const Garden = props => {
  let nooks = [];
  const [isForwardSort, toggleSort] = useState(true);
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const { loading, errors, data } = useQuery(GET_NOOKS_BY_USER_ID, {
    variables: { userId: currentUser.id },
  });
  if (data) {
    nooks = data.nooks.sort(sortByNookName);
    if (isForwardSort) nooks = nooks.reverse();
  }
  const plantTotalReducer = (total, nook) => total + nook.plants.length;
  const plantTotal = data && data.nooks.reduce(plantTotalReducer, 0);

  const baseProps = {
    nooks,
    plantTotal,
    isForwardSort,
    toggleSort,
    ...props,
  };

  return !loading && !errors && <BaseGarden {...baseProps} />;
};

const BaseGarden = props => (
  <div className={gardenContainer}>
    <HeaderRow {...props} />
  </div>
);

export default Garden;
