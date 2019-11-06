import React from 'react';
import { cleanup } from 'react-testing-library';
import { mount } from 'enzyme';
import PlantCardSmall from './PlantCardSmall';
import styles from './styles.css';
import 'jest-enzyme';

afterEach(cleanup);

describe('PlantCardSmall component', () => {
  let wrapper;
  const plant = {
    photoUrl: 'fakePhotoUrl',
    name: 'fakeName',
  };
  beforeEach(() => {
    wrapper = mount(<PlantCardSmall {...plant} />);
  });

  it('should mount a PlantCardSmall component', () => {
    const plantCardSmallComponent = wrapper.find(PlantCardSmall);
    expect(plantCardSmallComponent).toExist();
  });

  it('should render a div tag with correct className', () => {
    const divTag = wrapper.find('div');
    expect(divTag).toExist();
    expect(divTag.prop('className')).toEqual(styles.plantBox);
  });

  it('should render a paragraph tag with same name text as prop', () => {
    const pTag = wrapper.find('p');
    expect(pTag).toExist();
    expect(pTag.text()).toEqual(plant.name);
    expect(pTag.prop('className')).toEqual(styles.plantName);
  });

  it('should render an img tag with same src as prop photoUrl', () => {
    const imgTag = wrapper.find('img');
    expect(imgTag).toExist();
    expect(imgTag.prop('src')).toEqual(plant.photoUrl);
    expect(imgTag.prop('className')).toEqual(styles.plantPic);
  });
});
