import React from 'react';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import { AddToWishlistOption, text } from './index';
import styles from './styles.css';
import 'jest-enzyme';

afterEach(cleanup);

describe('AddToWishlistOption component', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      nook: {
        name: 'Fake Name',
      },
    };
    wrapper = mount(<AddToWishlistOption {...props.nook} />);
  });

  it('should mount a AddToWishlistOption component', () => {
    const element = wrapper.find(AddToWishlistOption);
    expect(element).toExist();
  });

  it('should mount a button with class name wishlistItem', () => {
    const element = wrapper
      .find('button')
      .find({ className: styles.wishlistItem });
    expect(element).toExist();
  });

  it('should mount a div with the class name listItemButton', () => {
    const element = wrapper
      .find('div')
      .find({ className: styles.listItemButton });
    expect(element).toExist();
  });

  it('should mount a div with the class name smallBox', () => {
    const element = wrapper.find('div').find({ className: styles.smallBox });
    expect(element).toExist();
    expect(element.prop('style').backgroundColor).toEqual(text.white);
  });

  it('should mount a div with the class name nookName', () => {
    const element = wrapper.find('div').find({ className: styles.nookName });
    expect(element).toExist();
    expect(element.prop('style').color).toEqual(text.black);
    expect(element.text()).toEqual(props.nook.name);
  });
});
