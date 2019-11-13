import React from 'react';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import { PlantCard } from './index';
import styles from './styles.css';
import 'jest-enzyme';

afterEach(cleanup);

describe('PlantCard component', () => {
  let wrapper, plant;

  beforeEach(() => {
    plant = {
      photoUrl: 'fakePhotoUrl',
      name: 'fakeName',
    };
    wrapper = mount(<PlantCard {...plant} />);
  });

  it('should mount a PlantCard component', () => {
    const element = wrapper.find(PlantCard);
    expect(element).toExist();
  });

  it('should render a div element with correct className', () => {
    const element = wrapper.find('div');
    expect(element).toExist();
    expect(element.prop('className')).toEqual(styles.plantBox);
  });

  it('should render a pharagraph element with same name text as prop', () => {
    const element = wrapper.find('p');
    expect(element).toExist();
    expect(element.text()).toEqual(plant.name);
    expect(element.prop('className')).toEqual(styles.plantName);
  });

  it('should render a img element with same src as prop photoUrl', () => {
    const element = wrapper.find('img');
    expect(element).toExist();
    expect(element.prop('src')).toEqual(plant.photoUrl);
    expect(element.prop('className')).toEqual(styles.plantPic);
  });
});
