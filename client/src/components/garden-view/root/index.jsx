import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import GET_NOOKS_BY_USER_ID from 'api/queries/getNooksByUserId';
import HeaderRow from '../HeaderRow';
import NookList from '../NookList';
import { gardenViewContainer } from './styles.css';
import sortByName from 'utils/sortByName';

const GardenView = props => {
  let nooks = [];
  const [isAlphabeticallySorted, toggleSort] = useState(true);
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const { loading, errors, data } = useQuery(GET_NOOKS_BY_USER_ID, {
    variables: { userId: currentUser ? currentUser.id : '' },
  });
  nooks = data && data.nooks.sort(sortByName);
  if (!isAlphabeticallySorted) nooks = nooks.reverse();

  const plantTotalReducer = (plantTotalAccumulator, nook) =>
    nook.plants && plantTotalAccumulator + nook.plants.length;
  const plantTotal = data && nooks.reduce(plantTotalReducer, 0);

  const baseProps = {
    nooks,
    plantTotal,
    isAlphabeticallySorted,
    toggleSort,
    ...props,
  };

  return !loading && !errors && <BaseGardenView {...baseProps} />;
};

export const BaseGardenView = props => (
  <div className={gardenViewContainer}>
    <HeaderRow {...props} />
    <NookList {...props} />
  </div>
);

export default GardenView;
