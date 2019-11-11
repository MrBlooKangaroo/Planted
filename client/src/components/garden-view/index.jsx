import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_NOOKS_BY_USERID } from '../../api/queries/getNooks';
import NookCardSmall from '../UI/nook-cards/NookCardSmall';
import {
  gardenContainer,
  header,
  gardenStats,
  nooksContainer,
} from './styles.css';

export const gardenText = {
  header: 'Garden',
};

const Garden = props => {
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const { loading, errors, data } = useQuery(
    GET_NOOKS_BY_USERID(currentUser.id),
  );
  const plantReducer = (total, nook) => total + nook.plants.length;
  const plantTotal = data ? data.nooks.reduce(plantReducer) : 0;
  const baseProps = {
    ...props,
    nooks: data && data.nooks,
    plantTotal,
  };
  debugger;
  return !loading && !errors && <BaseGarden {...baseProps} />;
};

const BaseGarden = ({ nooks, plantTotal }) => {
  return (
    <div className={gardenContainer}>
      <div className={header}>{gardenText.header}</div>
      <div className={gardenStats}>
        {nooks.length} nooks • {plantTotal} plants
      </div>
      <div className={nooksContainer}>
        {nooks.map(nook => (
          <NookCardSmall key={nook.id} {...nook} />
        ))}
      </div>
    </div>
  );
};

export default Garden;
