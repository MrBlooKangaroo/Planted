import React from 'react';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import { SubHeader, plantCountText, text } from './index';
import styles from './styles.css';
import 'jest-enzyme';

afterEach(cleanup);

describe('SubHeader component', () => {
  let wrapper, props;

  props = {
    plantCount: 3,
    title: 'SampleTitle',
  };

  beforeEach(() => {
    wrapper = mount(<SubHeader {...props} />);
  });

  it('should mount a SubHeader component', () => {
    const element = wrapper.find(SubHeader);
    expect(element).toExist();
  });

  it('should mount a left side space div', () => {
    const element = wrapper
      .find('div')
      .find({ className: styles.leftSideSpace });
    expect(element).toExist();
  });

  it('should mount the first span element for the categoryNames text', () => {
    const element = wrapper
      .find('span')
      .find({ className: styles.categoryNames });
    expect(element).toExist();
    expect(element.text()).toEqual(props.title);
  });

  it('should mount the second span element for the plant count text', () => {
    const element = wrapper.find('span').find({ className: styles.count });
    expect(element).toExist();
    expect(element.text()).toEqual(plantCountText(props.plantCount));
  });
});
