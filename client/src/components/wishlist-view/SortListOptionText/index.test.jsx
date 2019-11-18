import React from 'react';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import { SortListOptionText, text } from './index';
import styles from './styles.css';
import 'jest-enzyme';

afterEach(cleanup);

describe('SortListOptionText component', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      icon: 'iconPic',
      description: 'Looks like an icon',
      chosenAlt: 'icon pic alt',
    };
    wrapper = mount(<SortListOptionText {...props} />);
  });

  it('should mount a SortListOptionText component', () => {
    const element = wrapper.find(SortListOptionText);
    expect(element).toExist();
  });

  it('should mount a div with classname itemTextContainer', () => {
    const element = wrapper
      .find('div')
      .find({ className: styles.itemTextContainer });
    expect(element).toExist();
  });

  it('should mount a div with classname iconContainer', () => {
    const element = wrapper
      .find('div')
      .find({ className: styles.iconContainer });
    expect(element).toExist();
  });

  it('should mount a p element with icon is less than 10 characters', () => {
    const element = wrapper.find('p');
    expect(element).toExist();
    expect(element.at(0).text()).toEqual(props.icon);
  });

  it('should mount a img element when icon is greater than 10 characters', () => {
    wrapper.setProps({ icon: 'This is longer than 10 characters' });
    const element = wrapper.find('img').find({ alt: props.chosenAlt });
    expect(element).toExist();
    expect(element.prop('src')).toEqual('This is longer than 10 characters');
  });

  it('should mount a p element with the description', () => {
    const element = wrapper.find('p');
    expect(element).toExist();
    expect(element.at(1).text()).toEqual(props.description);
  });
});
