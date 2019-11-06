import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import Dropdown from './index';
import SubFilter, { subFilterText } from './SubFilter';
import CategoryList, { categoryListText } from './CategoryList';
import CategoryListItem from './CategoryListItem';
import FilterIcon from './FilterIcon';
import getLuxOrCycleIcon from '../../../utils/getLuxOrCycleIcon';

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

  it('should be passed all required props', () => {
    expect(element.props().isSelected).toBeDefined();
  });

  it('should be passed all required props', () => {
    const wrapperProps = element.props();
    expect(wrapperProps.isSelected).toBeDefined();
  });

  it('should mount the SubFilter components', () => {
    const subFilters = wrapper.find(SubFilter);
    expect(subFilters.length).toBe(2);
  });

  it('should pass the SubFilters components their required props', () => {
    const subFilters = wrapper.find(SubFilter);
    subFilters.forEach(subfilter =>
      expect(subfilter.props().type).toBeDefined(),
    );
  });

  it('should mount the CategoryList component', () => {
    const categoryList = wrapper.find(CategoryList);
    expect(categoryList).toExist();
  });

  it('should mount the CategoryListItem components', () => {
    const categoryListItems = element.find(CategoryListItem);
    expect(categoryListItems).toExist();
    expect(categoryListItems.length).toBe(14);
  });

  it('should pass the CategoryListItem components their required props', () => {
    const categoryListItems = wrapper.find(CategoryListItem);
    categoryListItems.forEach(
      categoryListItem =>
        expect(categoryListItem.props().categoryName).toBeDefined() &&
        expect(categoryListItem.props().isSelected).toBeDefined() &&
        expect(categoryListItem.props().onFilterClick).toBeDefined(),
    );
  });

  it('should mount the FilterIcon components', () => {
    const filterIcons = element.find(FilterIcon);
    expect(filterIcons).toExist();
    expect(filterIcons.length).toBe(6);
  });

  it("should have the category list's text", () => {
    const dropdownText = element.find(Dropdown).text();
    expect(dropdownText).toContain(categoryListText.header);
  });

  it("should have the subfilters' text", () => {
    const dropdownText = element.find(Dropdown).text();
    expect(dropdownText).toContain(subFilterText.lightIntensity);
    expect(dropdownText).toContain(subFilterText.waterFrequency);
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
