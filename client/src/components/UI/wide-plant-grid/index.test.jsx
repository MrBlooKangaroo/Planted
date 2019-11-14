import React from 'react';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import { WidePlantGrid } from './index';
import styles from './styles.css';
import 'jest-enzyme';

afterEach(cleanup);

describe('WidePlantGrid component', () => {
  let wrapper, plants;

  beforeEach(() => {
    plants = [
      {
        photoUrl: 'fakePhotoUrl',
        name: 'fakeName',
      },
    ];
    wrapper = mount(<WidePlantGrid plants={plants} />);
  });

  it('should mount a WidePlantGrid component', () => {
    const element = wrapper.find(WidePlantGrid);
    expect(element).toExist();
  });

  it('should mount a PlantGrid component', () => {
    const element = wrapper.find('PlantGrid');
    expect(element).toExist();
  });
});
