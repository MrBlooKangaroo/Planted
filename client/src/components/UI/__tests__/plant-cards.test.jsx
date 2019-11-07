import React from 'react';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import PlantCardSmall from '../plant-cards/PlantCardSmall';
import PlantCardLarge from '../plant-cards/PlantCardLarge';
import styles from '../plant-cards/index.css';
import 'jest-enzyme';

afterEach(cleanup);

describe('plant-card components', () => {
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

  describe('PlantCardLarge component', () => {
    let wrapper;
    const plantType = {
      name: 'Crotons',
      photoUrl: 'crotons.png',
      luxLevel: 'HIGH',
    };
    beforeEach(() => {
      wrapper = mount(<PlantCardLarge {...plantType} />);
    });

    it('should mount a PlantCardLarge component', () => {
      const component = wrapper.find(PlantCardLarge);
      expect(component).toExist();
    });

    it('should be passed all required props', async () => {
      expect(wrapper.props().name).toBeDefined();
      expect(wrapper.props().photoUrl).toBeDefined();
      expect(wrapper.props().luxLevel).toBeDefined();
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
});
