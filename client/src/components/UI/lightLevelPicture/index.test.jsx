import React from 'react';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import { LightLevelPicture } from './index';
import styles from './styles.css';
import 'jest-enzyme';
import {
  luxUnselectedHigh,
  luxUnselectedMedium,
  luxUnselectedLow,
} from 'assets/icons';
import { lightLevels } from 'constants/variables';

afterEach(cleanup);

describe('LightLevelPicture component', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      lightLevel: 'LOW',
    };
    wrapper = mount(<LightLevelPicture {...props} />);
  });

  it('should mount a LightLevelPicture component', () => {
    const element = wrapper.find(LightLevelPicture);
    expect(element).toExist();
  });

  it('should mount an img with low sun picture', () => {
    const element = wrapper.find('img');
    expect(element.prop('src')).toEqual(luxUnselectedLow);
  });

  it('should mount an img with medium sun picture', () => {
    wrapper.setProps({ lightLevel: lightLevels.medium });
    const element = wrapper.find('img');
    expect(element.prop('src')).toEqual(luxUnselectedMedium);
  });

  it('should mount an img with low sun picture', () => {
    wrapper.setProps({ lightLevel: lightLevels.high });
    const element = wrapper.find('img');
    expect(element.prop('src')).toEqual(luxUnselectedHigh);
  });
});
