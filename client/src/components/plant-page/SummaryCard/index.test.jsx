import React from 'react';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import { SummaryCard, text } from './index';
import styles from './styles.css';
import 'jest-enzyme';

afterEach(cleanup);

describe('SummaryCard component', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      plantType: {
        featuresWeb: 'Web features',
        instructionsWeb: 'Web Instructions',
      },
    };
    wrapper = mount(<SummaryCard {...props.plantType} />);
  });

  it('should mount a SummaryCard component', () => {
    const element = wrapper.find(SummaryCard);
    expect(element).toExist();
  });

  it('should mount the div element with summary class name', () => {
    const element = wrapper.find('div').find({ className: styles.summaryCard });
    expect(element).toExist();
  });

  it('should mount the svg element with largecircle class name', () => {
    const element = wrapper.find('svg').find({ className: styles.largeCircle });
    expect(element).toExist();
  });

  it('should mount the svg element with smallcircle class name', () => {
    const element = wrapper.find('svg').find({ className: styles.smallCircle });
    expect(element).toExist();
  });

  it('should mount the div element with summary card class name', () => {
    const element = wrapper
      .find('div')
      .find({ className: styles.summaryTextPanel });
    expect(element).toExist();
  });

  it('should mount the h4 element with summary card header class name', () => {
    const element = wrapper.find('h4').find({ className: styles.headers });
    expect(element).toExist();
    expect(element.text()).toEqual(text.plantFeatures);
  });

  it('should mount the first p element with summary card header class name', () => {
    const element = wrapper.find('p').find({ className: styles.description });
    expect(element).toExist();
    expect(element.at(0).text()).toEqual(props.plantType.featuresWeb);
  });

  it('should mount the h5 element with summary description class name', () => {
    const element = wrapper.find('h5').find({ className: styles.headers });
    expect(element).toExist();
    expect(element.text()).toEqual(text.growingFeatures);
  });

  it('should mount the second p element with summary description class name', () => {
    const element = wrapper.find('p').find({ className: styles.description });
    expect(element).toExist();
    expect(element.at(1).text()).toEqual(props.plantType.instructionsWeb);
  });
});
