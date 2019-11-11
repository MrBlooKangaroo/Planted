import React from 'react';
import { mount, configure } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import Layout from './index';
import NavBar from '../NavBar';

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe('Layout Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Layout />);
  });

  it('should mount the Layout component', () => {
    const layout = wrapper.find(Layout);
    expect(layout).toExist();
  });

  it('should mount the NavBar component', () => {
    const navBar = wrapper.find(NavBar);
    expect(navBar).toExist();
  });
});
