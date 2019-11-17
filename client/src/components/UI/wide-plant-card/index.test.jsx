import React from 'react';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import { WidePlantCard } from './index';
import styles from './styles.css';
import 'jest-enzyme';

afterEach(cleanup);

describe('WidePlantCard component', () => {
  let wrapper, plant;

  beforeEach(() => {
    plant = {
      photoUrl: 'fakePhotoUrl',
      name: 'fakeName',
    };
    wrapper = mount(<WidePlantCard {...plant} />);
  });

  it('should mount a WidePlantCard component', () => {
    const element = wrapper.find(WidePlantCard);
    expect(element).toExist();
  });

  it('should mount a PlantCard component', () => {
    const element = wrapper.find('PlantCard');
    expect(element).toExist();
  });
});
