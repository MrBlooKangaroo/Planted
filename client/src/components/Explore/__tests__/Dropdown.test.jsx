import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import Dropdown from '../Dropdown';
import SubFilter from '../Dropdown/SubFilter';
import CategoryList from '../Dropdown/CategoryList';

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe('Dropdown Component', () => {
  let wrapper, element, props;
  beforeEach(() => {
    props = { isSelected: () => {} };
    wrapper = shallow(<Dropdown {...props} />);
    element = mount(<Dropdown {...props} />);
  });

  it('should mount the Dropdown component', () => {
    const dropdown = element.find(Dropdown);
    expect(dropdown).toExist();
  });

  it('should be passed isSelected props', () => {
    expect(element.props().isSelected).toBeDefined();
  });

  it('should mount the SubFilter components', () => {
    const subFilters = wrapper.find(SubFilter);
    expect(subFilters.length).toBe(2);
  });

  it('should mount the CategoryList component', () => {
    const categoryList = wrapper.find(CategoryList);
    expect(categoryList).toExist();
  });
});
