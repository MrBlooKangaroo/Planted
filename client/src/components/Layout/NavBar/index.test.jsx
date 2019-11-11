import React from 'react';
import { mount, configure } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import NavBar, { navBarText } from '.';
import UserInfo from './UserInfo';
import { Login } from './Login';

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe('NavBar Component', () => {
  let element, props;
  beforeEach(() => {
    props = { isAuthenticated: false };
    element = mount(<NavBar {...props} />);
  });

  it('should mount the NavBar component', () => {
    const navBarComponent = element.find(NavBar);
    expect(navBarComponent).toExist();
  });

  it('should mount the Login component', () => {
    const loginComponent = element.find(Login);
    expect(loginComponent).toExist();
  });

  it('should define the UserInfo component', () => {
    const userInfoComponent = element.find(UserInfo);
    expect(userInfoComponent).toBeDefined();
  });

  it('should render a search bar', () => {
    const searchBar = element.find('input[type="text"]');
    expect(searchBar.length).toBe(1);
  });

  it('should have logo text', () => {
    const navBar = element.find(NavBar);
    expect(navBar.text()).toContain(navBarText.logo);
  });
});
