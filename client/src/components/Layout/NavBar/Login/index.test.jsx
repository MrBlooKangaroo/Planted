import React from 'react';
import { mount, configure } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { GoogleLogin } from 'react-google-login';
import 'jest-enzyme';
import { Login, loginText } from '.';

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe('Login Component', () => {
  let element;
  beforeEach(() => {
    element = mount(<Login />);
  });

  it('should mount the Login component', () => {
    const loginComponent = element.find(Login);
    expect(loginComponent).toExist();
  });

  it('should mount the Google Login component', () => {
    const googleLoginComponent = element.find(GoogleLogin);
    expect(googleLoginComponent).toExist();
  });

  it('should have log in text', () => {
    const text = element.find(Login).text();
    expect(text).toContain(loginText.login);
  });
});
