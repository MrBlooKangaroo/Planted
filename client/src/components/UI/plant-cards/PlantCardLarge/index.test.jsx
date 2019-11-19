import React from 'react';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import PlantCardLarge from './PlantCardLarge';
import styles from './styles.css';
import 'jest-enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);

describe('PlantCardLarge component', () => {
  let wrapper;
  const plantType = {
    id: '1',
    name: 'Crotons',
    photoUrl: 'crotons.png',
    luxLevel: 'HIGH',
  };
  beforeEach(() => {
    wrapper = mount(
      <Router>
        <PlantCardLarge {...plantType} />
      </Router>,
    );
  });

  it('should mount a PlantCardLarge component', () => {
    const component = wrapper.find(PlantCardLarge);
    expect(component).toExist();
  });

  it('should be passed all required props', async () => {
    const element = wrapper.find(PlantCardLarge);

    expect(element.prop('name')).toEqual(plantType.name);
    expect(element.prop('photoUrl')).toEqual(plantType.photoUrl);
    expect(element.prop('luxLevel')).toEqual(plantType.luxLevel);
  });

  it('should render an img tag with same props photoUrl', () => {
    const plantPhoto = wrapper.find('.plantCardLargePhoto');
    expect(plantPhoto).toExist();
    expect(plantPhoto.prop('src')).toEqual(plantType.photoUrl);
    expect(plantPhoto.prop('className')).toEqual(styles.plantCardLargePhoto);
  });

  it('should render the plant name', () => {
    expect(wrapper.text()).toContain(plantType.name);
  });

  it('should render an img tag with expected alt name', () => {
    const imgTag = wrapper.find('.plantCardLargeLuxLevel');
    expect(imgTag).toExist();
    expect(imgTag.prop('alt')).toEqual(`luxLevel:${plantType.luxLevel}`);
    expect(imgTag.prop('className')).toEqual(styles.plantCardLargeLuxLevel);
  });
});
