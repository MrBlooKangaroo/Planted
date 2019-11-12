import React, { useState } from 'react';
import NookCarousel from './NookCarousel';
import NookInfo from './NookInfo';
import { nookCardSmall } from './styles.css';

const NookCardSmall = ({ nook }) => {
  const { plants } = nook;
  const [carouselIndex, setCarouselIndex] = useState(0);
  const currentPlant = plants[carouselIndex];
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const onArrowClick = direction => {
    if (direction === 'left') setCarouselIndex(carouselIndex - 1);
    if (direction === 'right') setCarouselIndex(carouselIndex + 1);
  };
  const plantTotalText =
    plants.length === 1 ? `1 plant` : `${plants.length} plants`;
  const baseProps = {
    nook,
    plants,
    currentUser,
    currentPlant,
    carouselIndex,
    onArrowClick,
    plantTotalText,
  };
  return <BaseNookCardSmall {...baseProps} />;
};

const BaseNookCardSmall = props => (
  <div className={nookCardSmall}>
    <NookCarousel {...props} />
    <NookInfo {...props} />
  </div>
);

export default NookCardSmall;
