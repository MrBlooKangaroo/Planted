import React from 'react';
import { Carousel } from 'components/UI/Carousel';
import { CarouselHeader } from '../CarouselHeader';

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
    <CarouselHeader title={text.header} />
    <Carousel plants={plants} />
  </div>
);
