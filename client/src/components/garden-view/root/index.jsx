import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_NOOKS_BY_USER_ID } from '../../../api/queries/getNooks';
import NookList from '../NookList';
import HeaderRow from '../HeaderRow';
import { gardenContainer } from './styles.css';

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
    useQuery(GET_NOOKS_BY_USER_ID, {
      variables: { userId: currentUser.id },
      context: { headers: { authorization: token } },
    });
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

const BaseGarden = props => (
  <div className={gardenContainer}>
    <HeaderRow {...props} />
    <NookList {...props} />
  </div>
);

export default Garden;
