import React from 'react';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import { SuggestionsCarousel, SuggestionsCarouselBase, text } from './index';
import 'jest-enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);
const plants = [
  {
    id: 'fakeid123456789',
  },
];

describe('SuggestionsCarousel component', () => {
  let wrapper, props;

  props = {
    plants,
  };

  beforeEach(() => {
    wrapper = mount(
      <Router>
        <SuggestionsCarousel {...props} />
      </Router>,
    );
  });

  it('should mount a SuggestionsCarousel component', () => {
    const element = wrapper.find(SuggestionsCarousel);
    expect(element).toExist();
  });

  it('should mount a SuggestionsCarousel component', () => {
    const element = wrapper.find('SuggestionsCarouselBase');
    expect(element).toExist();
  });
});

describe('SuggestionsCarouselBase component', () => {
  let wrapper, props;

  props = {
    plants,
  };

  beforeEach(() => {
    wrapper = mount(
      <Router>
        <SuggestionsCarouselBase {...props} />
      </Router>,
    );
  });

  it('should mount a SubHeader component', () => {
    const element = wrapper.find('SubHeader');
    expect(element).toExist();
    expect(element.prop('title')).toEqual(text.header);
  });

  it('should mount a Carousel component', () => {
    const element = wrapper.find('Carousel');
    expect(element).toExist();
    expect(element.prop('plants')).toEqual(props.plants);
  });
});
