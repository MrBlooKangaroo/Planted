import React from 'react';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import { SortDropDown, text } from './index';
import styles from './styles.css';
import 'jest-enzyme';
import { arrowRight } from 'assets/icons';

afterEach(cleanup);

describe('SortDropDown component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<SortDropDown />);
  });

  it('should mount a SortDropDown component', () => {
    const element = wrapper.find(SortDropDown);
    expect(element).toExist();
  });

  it('should mount the div with a classname dropDownContainer', () => {
    const element = wrapper
      .find('div')
      .find({ className: styles.dropDownContainer });
    expect(element).toExist();
  });

  it('should mount the button with a classname dropDownButton', () => {
    const element = wrapper
      .find('button')
      .find({ className: styles.dropDownButton });
    expect(element).toExist();
    element.simulate('click');
    const elementCheck = wrapper.find('SortListOption');
    expect(elementCheck).toExist();
  });

  it('should mount the div with a classname buttonContentsContainer', () => {
    const element = wrapper
      .find('div')
      .find({ className: styles.buttonContentsContainer });
    expect(element).toExist();
  });

  it('should mount the p with a classname header', () => {
    const element = wrapper.find('p').find({ className: styles.header });
    expect(element).toExist();
    expect(element.text()).toEqual(text.sortBy);
  });

  it('should mount the img with a classname downArrow', () => {
    const element = wrapper.find('img').find({ className: styles.downArrow });
    expect(element).toExist();
    expect(element.prop('src')).toEqual(arrowRight);
    expect(element.prop('alt')).toEqual(text.arrow);
  });

  it('should mount the SortList class after click', () => {
    const button = wrapper.find('button');
    button.simulate('click');
    const element = wrapper.find('SortListOption');
    expect(element).toExist();
  });
});
