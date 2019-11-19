import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow, configure } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import Explore, { exploreText } from '.';
import Dropdown from '../Dropdown';
import PlantTypeList from '../PlantTypeList';

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe('Explore Component', () => {
  let wrapper, props;
  beforeEach(() => {
    wrapper = shallow(<Explore {...props} />);
  });

  it('should define the Explore component', () => {
    const explore = wrapper.find(Explore);
    expect(explore).toBeDefined();
  });

  it('should be passed all required props', async () => {
    expect(wrapper.props().isDropdownOpen).toBeDefined();
    expect(wrapper.props().isDropdownOpen).toBe(false);
    expect(wrapper.props().toggleDropdown).toBeDefined();
    expect(typeof wrapper.props().toggleDropdown).toBe('function');
    expect(wrapper.props().activeFilters).toBeDefined();
    expect(typeof wrapper.props().activeFilters).toBe('object');
    expect(wrapper.props().onFilterClick).toBeDefined();
    expect(typeof wrapper.props().onFilterClick).toBe('function');
    expect(wrapper.props().checkIfSelected).toBeDefined();
    expect(typeof wrapper.props().checkIfSelected).toBe('function');
  });

  it('should define the Dropdown component', () => {
    const dropdown = wrapper.find(Dropdown);
    expect(dropdown).toBeDefined();
  });

  it('should define the PlantTypeList component', () => {
    const plantTypeList = wrapper.find(PlantTypeList);
    expect(plantTypeList).toBeDefined();
  });

  it('should have the prompt text', () => {
    expect(wrapper.dive().text()).toContain(exploreText.prompt);
  });

  it('should have the header text', () => {
    expect(wrapper.dive().text()).toContain(exploreText.header);
  });

  it('should NOT render the Dropdown component when isDropdownOpen is false', () => {
    wrapper.setProps({ isDropdownOpen: false });
    const dropdownComponent = wrapper.find(Dropdown);
    expect(Object.keys(dropdownComponent).length).toBe(0);
  });
});
