import React from 'react';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import PlantCardSmall from '.';
import styles from './styles.css';
import 'jest-enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);

describe('PlantCardSmall component', () => {
  let wrapper;
  const plant = {
    photoUrl: 'fakePhotoUrl',
    name: 'fakeName',
  };
  beforeEach(() => {
    wrapper = mount(
      <Router>
        <PlantCardSmall {...plant} />
      </Router>,
    );
  });

  it('should mount a PlantCardSmall component', () => {
    const component = wrapper.find(PlantCardSmall);
    expect(component).toExist();
  });

  it('should render a div tag with correct className', () => {
    const divTag = wrapper.find('div');
    expect(divTag).toExist();
    expect(divTag.prop('className')).toEqual(styles.plantCardSmall);
  });

  it('should render an img tag with same src as prop photoUrl', () => {
    const imgTag = wrapper.find('img');
    expect(imgTag).toExist();
    expect(imgTag.prop('src')).toEqual(plant.photoUrl);
    expect(imgTag.prop('className')).toEqual(styles.plantCardSmallPhoto);
  });

  it('should render a paragraph tag with same name text as prop', () => {
    const pTag = wrapper.find('p');
    expect(pTag).toExist();
    expect(pTag.text()).toEqual(plant.name);
    expect(pTag.prop('className')).toEqual(styles.plantCardSmallName);
  });
});
