import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import GET_NOOKS_BY_USER_ID from 'api/queries/getNooksByUserId';
import HeaderRow from '../HeaderRow';
import { gardenContainer } from './styles.css';
import sortByName from 'utils/sortByName';

const Garden = props => {
  let nooks = [];
  const [isAlphabeticallySorted, toggleSort] = useState(true);
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const { loading, errors, data } = useQuery(GET_NOOKS_BY_USER_ID, {
    variables: { userId: currentUser.id },
  });
  if (data) {
    nooks = data.nooks.sort(sortByName);
  }
  const plantTotalReducer = (plantTotalAccumulator, nook) =>
    nook.plants && plantTotalAccumulator + nook.plants.length;
  const plantTotal = data && data.nooks.reduce(plantTotalReducer, 0);

  const baseProps = {
    nooks,
    plantTotal,
    isAlphabeticallySorted,
    toggleSort,
    ...props,
  };

  return !loading && !errors && <BaseGarden {...baseProps} />;
};

export const BaseGarden = props => (
  <div className={gardenContainer}>
    <HeaderRow {...props} />
  </div>
);

export default Garden;
