import React from 'react';
import { Carousel } from 'components/UI/Carousel';
import { SubHeader } from 'components/UI/SubHeader';

const text = {
  header: 'Wishlist',
};

export const WishlistCarousel = ({ plants }) => {
  const plantTypes = plants.map(plant => plant.plantType);
  const plantCount = plantTypes.length;

  const props = {
    plants: plantTypes,
    plantCount,
  };

  return <WishlistCarouselBase {...props} />;
};

export const WishlistCarouselBase = ({ plants, plantCount }) => (
  <div>
    {plantCount > 0 && (
      <SubHeader title={text.header} plantCount={plantCount} />
    )}
    <Carousel plants={plants} />
  </div>
);
