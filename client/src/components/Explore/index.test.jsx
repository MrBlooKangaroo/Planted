import React from 'react';
import { shallow, configure } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import Explore from './index';
import Dropdown from './Dropdown';
import PlantList from './PlantList';

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe('Explore Component', () => {
  let wrapper, props;
  beforeEach(() => {
    props = { isOpen: true };
    wrapper = shallow(<Explore {...props} />);
  });

  it('should mount the Explore component', () => {
    const explore = wrapper.find(Explore);
    expect(explore).toBeDefined();
  });

  it('should mount the Dropdown component', () => {
    const dropdown = wrapper.find(Dropdown);
    expect(dropdown).toBeDefined();
  });

  it('should mount the PlantList component', () => {
    const plantList = wrapper.find(PlantList);
    expect(plantList).toBeDefined();
  });

  it('should render the greeting message', () => {
    const headerText = 'Find new plant friends.';
    const header = wrapper.find('.header');
    expect(header).toExist();
    expect(header).toIncludeText(headerText);
  });

  it("should NOT render the Dropdown component if it's not open", () => {
    wrapper.setProps({ isOpen: false });
    const dropdownComponent = wrapper.find(Dropdown);
    expect(Object.keys(dropdownComponent).length).toBe(0);
  });
});
