import React from 'react';
import NookCardSmall from 'components/UI/nook-cards/NookCardSmall/root';
import { nooksContainer } from './styles.css';

const NookList = ({ nooks }) => (
  <div className={nooksContainer}>
    {nooks.map(nook => (
      <NookCardSmall key={nook.name} nook={nook} />
    ))}
  </div>
);

export default NookList;
