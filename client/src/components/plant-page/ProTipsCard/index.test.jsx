import React from 'react';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import { ProTipsCard, text } from './index';
import styles from './styles.css';
import 'jest-enzyme';

afterEach(cleanup);

describe('ProTipsCard component', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      plantType: {
        petToxicity: 'Pet Toxic',
        humidityAdvice: 'Humid',
        travelAdvice: "Don't",
        careAdvice: 'Do Well',
      },
    };
    wrapper = mount(<ProTipsCard {...props.plantType} />);
  });

  it('should mount a ProTipsCard component', () => {
    const element = wrapper.find(ProTipsCard);
    expect(element).toExist();
  });

  it('should mount a h3 elment with header stlye', () => {
    const element = wrapper.find('h3').find({ className: styles.header });
    expect(element).toExist();
    expect(element.text()).toEqual(text.proTips);
  });
});
