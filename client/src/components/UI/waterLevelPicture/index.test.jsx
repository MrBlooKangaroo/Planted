import React from 'react';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import { WaterLevelPicture } from './index';
import styles from './styles.css';
import 'jest-enzyme';
import {
  cycleUnselectedHigh,
  cycleUnselectedMedium,
  cycleUnselectedLow,
} from 'assets/icons';
import { lightLevels } from 'constants/variables';

afterEach(cleanup);

describe('WaterLevelPicture component', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      waterLevel: 'LOW',
    };
    wrapper = mount(<WaterLevelPicture {...props} />);
  });

  it('should mount a WaterLevelPicture component', () => {
    const element = wrapper.find(WaterLevelPicture);
    expect(element).toExist();
  });

  it('should mount an img with low water level picture', () => {
    const element = wrapper.find('img');
    expect(element.prop('src')).toEqual(cycleUnselectedLow);
  });

  it('should mount an img with medium water level picture', () => {
    wrapper.setProps({ waterLevel: lightLevels.medium });
    const element = wrapper.find('img');
    expect(element.prop('src')).toEqual(cycleUnselectedMedium);
  });

  it('should mount an img with low water level picture', () => {
    wrapper.setProps({ waterLevel: lightLevels.high });
    const element = wrapper.find('img');
    expect(element.prop('src')).toEqual(cycleUnselectedHigh);
  });
});
