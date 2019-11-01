import React from 'react';
import { shallow, configure } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import Dropdown from './index';
import SubFilter from './SubFilter';
import Categories from './Categories';

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe('Dropdown Component', () => {
  let wrapper, props;
  beforeEach(() => {
    props = { filters: [] };
    wrapper = shallow(<Dropdown {...props} />);
  });

  it('should mount the Dropdown component', () => {
    const dropdown = wrapper.find(Dropdown);
    expect(dropdown).toBeDefined();
  });

  it('should mount the SubFilter components', () => {
    const subFilter = wrapper.find(SubFilter);
    expect(subFilter.length).toBe(2);
  });

  it('should mount the Categories component', () => {
    const categories = wrapper.find(Categories);
    expect(categories).toBeDefined();
  });
});
