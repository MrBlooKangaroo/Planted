import React from 'react';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import { TopCard, text } from './index';
import styles from './styles.css';
import 'jest-enzyme';
import { heartUnselected } from 'assets/icons';

afterEach(cleanup);

describe('TopCard component', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      plantType: {
        name: 'fakeName',
        luxLevel: 'LOW',
        luxLevelInfo: 'Out of sun',
        waterLevel: 'HIGH',
        waterCycleInfo: 'No water',
        photoUrl: 'fakeUrl',
      },
    };
    wrapper = mount(<TopCard {...props.plantType} />);
  });

  it('should mount a TopCard component', () => {
    const element = wrapper.find(TopCard);
    expect(element).toExist();
  });

  it('should mount the div element with Top container for class name', () => {
    const element = wrapper
      .find('div')
      .find({ className: styles.topCardContainer });
    expect(element).toExist();
  });

  it('should mount the img element with plant picture for class name', () => {
    const element = wrapper
      .find('img')
      .find({ className: styles.plantPicture });
    expect(element).toExist();
    expect(element.prop('src')).toEqual(props.plantType.photoUrl);
    expect(element.prop('alt')).toEqual(text.plantAlt);
  });

  it('should mount the div element with title container for class name', () => {
    const element = wrapper
      .find('div')
      .find({ className: styles.titleContainer });
    expect(element).toExist();
  });

  it('should mount the h1 element with title  for class name', () => {
    const element = wrapper.find('h1').find({ className: styles.title });
    expect(element).toExist();
    expect(element.text()).toEqual(props.plantType.name);
  });

  it('should mount the button element with heartButton for class name', () => {
    const element = wrapper
      .find('button')
      .find({ className: styles.heartButton });
    expect(element).toExist();
  });

  it('should mount the img element with the alt to be heartAlt', () => {
    const element = wrapper.find('img').find({ alt: text.heartAlt });
    expect(element).toExist();
    expect(element.prop('src')).toEqual(heartUnselected);
  });

  it('should mount the h2 element with header for class name', () => {
    const element = wrapper.find('h2').find({ className: styles.header });
    expect(element).toExist();
    expect(element.text()).toEqual(text.lightHeader);
  });

  it('should mount a LightLevelPicture component', () => {
    const element = wrapper
      .find('LightLevelPicture')
      .find({ styles: styles.indicator });
    expect(element).toExist();
    expect(element.prop('lightLevel')).toEqual(props.plantType.luxLevel);
  });

  it('should mount the p element with description for class name', () => {
    const element = wrapper.find('p').find({ className: styles.description });
    expect(element).toExist();
    expect(element.at(0).text()).toEqual(props.plantType.luxLevelInfo);
    expect(element.at(1).text()).toEqual(props.plantType.waterCycleInfo);
  });

  it('should mount the h3 element with header for class name', () => {
    const element = wrapper.find('h3').find({ className: styles.header });
    expect(element).toExist();
    expect(element.text()).toEqual(text.waterHeader);
  });

  it('should mount a WaterLevelPicture component', () => {
    const element = wrapper
      .find('WaterLevelPicture')
      .find({ styles: styles.indicator });
    expect(element).toExist();
    expect(element.prop('waterLevel')).toEqual(props.plantType.waterLevel);
  });
});
