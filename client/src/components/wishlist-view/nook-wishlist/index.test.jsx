import React from 'react';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import { NookWishlist, text } from './index';
import styles from './styles.css';
import 'jest-enzyme';

afterEach(cleanup);

describe('NookWishlist component', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      nook: {
        name: 'nook name',
        wishes: [
          {
            plantType: {
              name: 'wish name',
              photoUrlVerticalCrop: 'fakeUrl',
            },
          },
        ],
      },
    };
    wrapper = mount(<NookWishlist {...props} />);
  });

  it('should mount a NookWishlist component', () => {
    const element = wrapper.find(NookWishlist);
    expect(element).toExist();
  });

  it('should mount the SubHeader element with plant count', () => {
    const element = wrapper
      .find('SubHeader')
      .find({ plantCount: props.nook.wishes.length });
    expect(element).toExist();
    expect(element.prop('title')).toEqual(props.nook.name);
  });

  it('should mount the div element with grid container style', () => {
    const element = wrapper
      .find('div')
      .find({ className: styles.gridContainer });
    expect(element).toExist();
  });

  it('should mount the plant grid element nooks being passed in', () => {
    const element = wrapper.find('div').find({ plants: props.nook.wishes });
    expect(element).toExist();
  });
});
