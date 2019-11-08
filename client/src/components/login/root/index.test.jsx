import React from 'react';
import { cleanup } from 'react-testing-library';
import { mount } from 'enzyme';
import 'jest-enzyme';
import { Login } from './index';

import { GoogleLogin } from 'react-google-login';

afterEach(cleanup);

describe('Login component at intial state', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Login />);
  });

  it('should mount a Login component', () => {
    const LoginComponent = wrapper.find(Login);
    expect(LoginComponent).toExist();
  });

  it('should render a google signin button', () => {
    const button = wrapper.find(GoogleLogin);
    expect(button).toExist();
    expect(button.text()).toEqual('Login');
  });
});