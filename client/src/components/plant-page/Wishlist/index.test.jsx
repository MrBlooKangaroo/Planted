import React from 'react';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import { Wishlist, text } from './index';
import styles from './styles.css';
import 'jest-enzyme';
import { arrowConnecting, exit } from 'assets/icons';

afterEach(cleanup);

describe('Wishlist component', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      nooks: [
        {
          name: 'Fake Name',
          id: 'fakeid123',
        },
      ],
    };
    wrapper = mount(<Wishlist {...props} />);
  });

  it('should mount a Wishlist component', () => {
    const element = wrapper.find(Wishlist);
    expect(element).toExist();
  });

  it('should mount a img with class name wishlistConnector', () => {
    const element = wrapper
      .find('img')
      .find({ className: styles.wishlistConnector });
    expect(element).toExist();
    expect(element.prop('src')).toEqual(arrowConnecting);
    expect(element.prop('alt')).toEqual(text.connectorAlt);
  });

  it('should mount a div with class name wishlistContainer', () => {
    const element = wrapper
      .find('div')
      .find({ className: styles.wishlistContainer });
    expect(element).toExist();
  });

  it('should mount a div with class name wishlistHeaderContainer', () => {
    const element = wrapper
      .find('div')
      .find({ className: styles.wishlistHeaderContainer });
    expect(element).toExist();
  });

  it('should mount a h5 with class name header', () => {
    const element = wrapper.find('h5').find({ className: styles.header });
    expect(element).toExist();
    expect(element.text()).toEqual(text.wishlistHeader);
  });

  it('should mount a button with class name exit', () => {
    const element = wrapper.find('div').find({ className: styles.exit });
    expect(element).toExist();
  });

  it('should mount a img with alt as closeButtonHeader', () => {
    const element = wrapper.find('img').find({ alt: text.closeButtonHeader });
    expect(element).toExist();
    expect(element.prop('src')).toEqual(exit);
  });

  it('should mount a div with class name optionList', () => {
    const element = wrapper.find('div').find({ className: styles.optionList });
    expect(element).toExist();
  });

  it('should mount a div with class name saveButtonContainer', () => {
    const element = wrapper
      .find('div')
      .find({ className: styles.saveButtonContainer });
    expect(element).toExist();
  });

  it('should mount a input with class name saveButton', () => {
    const element = wrapper
      .find('input')
      .find({ className: styles.saveButton });
    expect(element).toExist();
    expect(element.prop('type')).toEqual(text.buttonType);
    expect(element.prop('value')).toEqual(text.buttonValue);
  });
});
