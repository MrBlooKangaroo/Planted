import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import GET_NOOKS_BY_USER_ID from 'api/queries/getNooksByUserId';
import HeaderRow from '../HeaderRow';
import { gardenContainer } from './styles.css';
import sortByName from 'utils/sortByName';
import NookCardSmall from 'components/UI/nook-cards/NookCardSmall';

export const gardenText = {
  header: 'Garden',
  forwardsSort: 'A to Z',
  backwardsSort: 'Z to A',
};

// export const sortByName = (a, b) => {
//   if (a.name < b.name) return -1;
//   if (a.name > b.name) return 1;
//   return 0;
// };

const Garden = props => {
  let nooks = [];
  const [isAlphabeticallySorted, toggleDropdown] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const { loading, errors, data } = useQuery(
    GET_NOOKS_BY_USER_ID(currentUser.id),
  );
  if (data)
    nooks == isAlphabeticallySorted
      ? data.nooks.sort(sortByName)
      : data.nooks.sort(sortByName).reverse();
  const plantTotalReducer = (total, nook) => total + nook.plants.length;
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

const BaseGarden = ({
  nooks,
  plantTotal,
  isAlphabeticallySorted,
  toggleDropdown,
}) => {
  const { header, forwardsSort, backwardsSort } = gardenText;
  return (
    <div className={gardenContainer}>
      <HeaderRow {...props} />
      <div className={nooksContainer}>
        {nooks.map(nook => (
          <NookCardSmall key={nook.name} {...nook} />
        ))}
      </div>
    </div>
  );
};

export default Garden;
