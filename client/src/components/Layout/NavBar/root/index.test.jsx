import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import NavBar, { navBarText, getNavLinkText } from '..';
import { rootPath, gardenPath, wishlistPath } from 'constants/paths';
import UserInfo from '../UserInfo';
import { Login } from '../Login';

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe('NavBar Component', () => {
  let element, props;
  beforeEach(() => {
    props = { isAuthenticated: false };
    element = mount(
      <BrowserRouter>
        <NavBar {...props} />
      </BrowserRouter>,
    );
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

describe('getNavLinkText function', () => {
  it('should return EXPLORE text if passed index path', () => {
    const textResponse = getNavLinkText(rootPath);
    expect(textResponse).toBe(navBarText.explore);
  });

  it('should return GARDEN text if passed /garden path', () => {
    const textResponse = getNavLinkText(gardenPath);
    expect(textResponse).toBe('GARDEN');
  });

  it('should return WISHLIST text if passed /wishlist path', () => {
    const textResponse = getNavLinkText(wishlistPath);
    expect(textResponse).toBe('WISHLIST');
  });
});
