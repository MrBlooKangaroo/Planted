import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import { EmptyBanner } from './index';
import styles from './styles.css';
import { cactus } from 'assets/icons';
import 'jest-enzyme';

afterEach(cleanup);

describe('EmptyBanner component', () => {
  let wrapper;

  const text = {
    noPlants: 'You have no plants in your nook :(',
  };

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <EmptyBanner />
      </BrowserRouter>,
    );
  });

  it('should mount a EmptyBanner component', () => {
    const element = wrapper.find(EmptyBanner);
    expect(element).toExist();
  });

  it('should mount the first div element for the cactus container', () => {
    const element = wrapper
      .find('div')
      .find({ className: styles.cactusContainer });
    expect(element).toExist();
  });

  it('should mount the img element', () => {
    const element = wrapper.find('img');
    expect(element).toExist();
    expect(element.prop('src')).toEqual(cactus);
    expect(element.prop('className')).toEqual(styles.cactusPicture);
  });

  it('should mount the p element', () => {
    const element = wrapper.find('p');
    expect(element).toExist();
    expect(element.prop('className')).toEqual(styles.noPlantsText);
    expect(element.text()).toEqual(text.noPlants);
  });
});
