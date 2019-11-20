import React from 'react';
import { mount, configure } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import CategoryListItem from '.';

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe('Category List Component', () => {
  let element, props;
  beforeEach(() => {
    props = { checkIfSelected: () => {}, categoryName: 'Jungle Vibes' };
    element = mount(<CategoryListItem {...props} />);
  });

  it('should mount the CategoryListItem components', () => {
    const categoryListItem = element.find(CategoryListItem);
    expect(categoryListItem).toExist();
  });

  it("should have the category list item's name", () => {
    expect(element.text()).toContain(props.categoryName);
  });
});
