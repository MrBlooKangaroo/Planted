import React from 'react';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import FilterIcon from '../icons/FilterIcon';
import getLuxOrCycleIcon from '../../../utils/getLuxOrCycleIcon';
import 'jest-enzyme';

afterEach(cleanup);

describe('icon components', () => {
  describe('FilterIcon component', () => {
    let wrapper, props;
    beforeEach(() => {
      props = {
        type: 'luxLevel',
        level: 'HIGH',
        isSelected: () => {},
        onFilterClick: () => {},
      };
      wrapper = mount(<FilterIcon {...props} />);
    });

    it('should mount a FilterIcon component', () => {
      const component = wrapper.find(FilterIcon);
      expect(component).toExist();
    });

    it('should be passed all required props', async () => {
      expect(wrapper.props().type).toBeDefined();
      expect(wrapper.props().level).toBeDefined();
      expect(wrapper.props().isSelected).toBeDefined();
      expect(wrapper.props().onFilterClick).toBeDefined();
    });

    it('should be able to use getLuxOrCycleIcon function', () => {
      const className = {};
      const icon = getLuxOrCycleIcon('luxLevel', 'HIGH', 'selected', className);
      expect(icon).toBeDefined();
      expect(icon.props.src).toBe('luxSelectedHigh.svg');
      expect(icon.props.alt).toBe('luxLevel:HIGH');
      expect(Object.keys(icon.props.className).length).toBe(0);
    });
  });
});
