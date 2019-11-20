import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import FilterIcon from './FilterIcon';
import 'jest-enzyme';

afterEach(cleanup);

describe('icon components', () => {
  describe('FilterIcon component', () => {
    let wrapper, props;
    beforeEach(() => {
      props = {
        type: 'luxLevel',
        level: 'HIGH',
        checkIfSelected: () => {},
        onFilterClick: () => {},
      };
      wrapper = mount(
        <BrowserRouter>
          <FilterIcon {...props} />
        </BrowserRouter>,
      );
    });

    it('should mount a FilterIcon component', () => {
      const component = wrapper.find(FilterIcon);
      expect(component).toExist();
    });

    it('should be passed all required props', () => {
      expect(wrapper.props().type).toBeDefined();
      expect(wrapper.props().level).toBeDefined();
      expect(wrapper.props().checkIfSelected).toBeDefined();
      expect(wrapper.props().onFilterClick).toBeDefined();
    });
  });
});
