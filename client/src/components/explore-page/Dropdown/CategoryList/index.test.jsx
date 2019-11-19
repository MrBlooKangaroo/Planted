import React from 'react';

import { shallow, mount, configure } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import CategoryList, { categoryListText } from '.';
import CategoryListItem from './CategoryListItem';

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe('Category List Component', () => {
  let wrapper, element, props;
  beforeEach(() => {
    props = { checkIfSelected: () => {} };
    wrapper = shallow(<CategoryList {...props} />);
    element = mount(<CategoryList {...props} />);
  });

  it('should mount the CategoryList component', () => {
    const categoryList = element.find(CategoryList);
    expect(categoryList).toExist();
  });

  it('should mount the CategoryListItem components', () => {
    const categoryListItems = wrapper.find(CategoryListItem);
    expect(categoryListItems).toExist();
    expect(categoryListItems.length).toBe(14);
  });

  it('should pass the required props to the CategoryListItems', () => {
    const categoryListItems = wrapper.find(CategoryListItem);
    categoryListItems.forEach(
      categoryListItem =>
        expect(categoryListItem.props().categoryName).toBeDefined() &&
        expect(categoryListItem.props().checkIfSelected).toBeDefined() &&
        expect(categoryListItem.props().onFilterClick).toBeDefined(),
    );
  });

  it("should have the category list's text", () => {
    expect(wrapper.text()).toContain(categoryListText.header);
  });

  it("should have the category list item's name", () => {
    const category = shallow(
      <CategoryListItem
        checkIfSelected={() => {}}
        categoryName="Jungle Vibes"
      />,
    );
    expect(category.text()).toContain('Jungle Vibes');
  });
});
