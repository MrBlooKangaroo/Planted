import React from 'react';
import { Carousel } from 'components/UI/Carousel';
import { SubHeader } from 'components/UI/SubHeader';

export const text = {
  header: 'Suggestions',
};

export const SuggestionsCarousel = ({ plants }) => {
  const props = {
    plants,
  };

  return <SuggestionsCarouselBase {...props} />;
};

export const SuggestionsCarouselBase = ({ plants }) => (
  <div>
    <SubHeader title={text.header} />
    <Carousel plants={plants} />
  </div>
);
