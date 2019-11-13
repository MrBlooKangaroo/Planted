import React from 'react';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import { WishlistCarousel } from './index';
import { WishlistCarouselBase } from './index';
import 'jest-enzyme';

afterEach(cleanup);

describe('WishlistCarousel component', () => {
  let wrapper, props;

  props = {
    plants: [
      {
        plantType: {
          id: 'fakeid123456789',
        },
      },
    ],
  };

  beforeEach(() => {
    wrapper = mount(<WishlistCarousel {...props} />);
  });

  it('should mount a WishlistCarousel component', () => {
    const element = wrapper.find(WishlistCarousel);
    expect(element).toExist();
  });

  it('should mount a WishlistCarouselBase component', () => {
    const element = wrapper.find('WishlistCarouselBase');
    expect(element).toExist();
  });
});

describe('WishlistCarouselBase component', () => {
  let wrapper, props;

  const text = {
    header: 'Wishlist',
  };

  props = {
    plants: [
      {
        plantType: {
          id: 'fakeid123456789',
        },
      },
    ],
    plantCount: 1,
  };

  beforeEach(() => {
    wrapper = mount(<WishlistCarouselBase {...props} />);
  });

  it('should mount a WishlistCarouselBase component', () => {
    const element = wrapper.find(WishlistCarouselBase);
    expect(element).toExist();
  });

  it('should mount a CarouselHeader component', () => {
    const element = wrapper.find('CarouselHeader');
    expect(element).toExist();
    expect(element.prop('title')).toEqual(text.header);
    expect(element.prop('plantCount')).toEqual(props.plants.length);
  });

  it('should mount a Carousel component', () => {
    const element = wrapper.find('Carousel');
    expect(element).toExist();
    expect(element.prop('plants')).toEqual(props.plants);
  });
});
