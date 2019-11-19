import React from 'react';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import { PlantGrid } from './index';
import styles from './styles.css';
import 'jest-enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);

describe('PlantGrid component', () => {
  let wrapper, plants;

  beforeEach(() => {
    plants = [
      {
        photoUrl: 'fakePhotoUrl',
        name: 'fakeName',
      },
    ];
    wrapper = mount(
      <Router>
        <PlantGrid plants={plants} />
      </Router>,
    );
  });

  it('should mount a PlantGrid component', () => {
    const element = wrapper.find(PlantGrid);
    expect(element).toExist();
  });

  it('should contain a div element', () => {
    const element = wrapper.find('div');
    expect(element).toExist();
    expect(element.at(0).prop('className')).toEqual(styles.plantContainer);
    expect(element.at(1).prop('className')).toEqual(styles.plantBox);
  });
});
