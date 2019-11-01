import React from 'react';
import { shallow, configure } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import NavBar from './index';

configure({ adapter: new Adapter() });

afterEach(cleanup);

describe('NavBar Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  });

  it('should mount the NavBar component', () => {
    const navBar = wrapper.find(NavBar);
    expect(navBar).toBeDefined();
  });

  it('should render a search bar', () => {
    const searchBar = wrapper.find('input[type="text"]');
    expect(searchBar.length).toBe(1);
  });
});
