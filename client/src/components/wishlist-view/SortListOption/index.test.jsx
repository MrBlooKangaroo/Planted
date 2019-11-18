import React from 'react';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import { SortListOption, text } from './index';
import styles from './styles.css';
import 'jest-enzyme';

afterEach(cleanup);

describe('SortListOption component', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      icon: 'iconPic',
      description: 'Looks like an icon',
      iconGreen: 'iconPicGreen',
    };
    wrapper = mount(<SortListOption {...props} />);
  });

  it('should mount a SortListOption component', () => {
    const element = wrapper.find(SortListOption);
    expect(element).toExist();
  });

  it('should mount a button with class name sortListButton', () => {
    const element = wrapper
      .find('button')
      .find({ className: styles.sortListButton });
    expect(element).toExist();
  });

  it('should pass the required props to the SortListOptionText', () => {
    const element = wrapper.find('SortListOptionText');
    expect(element).toExist();
    expect(element.prop('description')).toEqual(props.description);
  });
});
