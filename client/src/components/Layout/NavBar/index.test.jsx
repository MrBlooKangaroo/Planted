import React from 'react';
import { mount, configure } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { GoogleLogin } from 'react-google-login';
import 'jest-enzyme';
import NavBar from './index';
import { loginText } from './Login';

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe('NavBar Component', () => {
  let wrapper, props;
  beforeEach(() => {
    props = { isAuthenticated: false };
    wrapper = mount(<NavBar {...props} />);
  });

  it('should mount the NavBar component', () => {
    const navBar = wrapper.find(NavBar);
    expect(navBar).toExist();
  });

  it('should render a search bar', () => {
    const searchBar = wrapper.find('input[type="text"]');
    expect(searchBar.length).toBe(1);
  });

  it('should render a google signin button', () => {
    const button = wrapper.find(GoogleLogin);
    expect(button).toExist();
    expect(button.text()).toEqual(loginText.login);
  });
});
