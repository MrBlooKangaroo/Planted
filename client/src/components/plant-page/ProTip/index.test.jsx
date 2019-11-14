import React from 'react';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import { ProTip } from './index';
import styles from './styles.css';
import 'jest-enzyme';

afterEach(cleanup);

describe('ProTip component', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      icon: 'fakeUrl',
      iconText: 'fakeText',
      altContent: 'fake pic',
    };
    wrapper = mount(<ProTip {...props} />);
  });

  it('should mount a ProTips component', () => {
    const element = wrapper.find(ProTip);
    expect(element).toExist();
  });

  it('should mount a div elment with proTip container stlye', () => {
    const element = wrapper
      .find('div')
      .find({ className: styles.proTipContainer });
    expect(element).toExist();
  });

  it('should mount a div elment with icons container stlye', () => {
    const element = wrapper
      .find('div')
      .find({ className: styles.iconsContainer });
    expect(element).toExist();
  });

  it('should mount a img elment with the prop icon', () => {
    const element = wrapper.find('img').find({ src: props.icon });
    expect(element).toExist();
    expect(element.prop('alt')).toEqual(props.altContent);
  });

  it('should mount a p elment with the prop icon', () => {
    const element = wrapper.find('p').find({ className: styles.description });
    expect(element).toExist();
    expect(element.text()).toEqual(props.iconText);
  });
});
