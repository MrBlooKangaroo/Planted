import React from 'react';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import 'jest-enzyme';
import { GoogleLogin } from 'react-google-login';
import { Login, text } from './index';

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
    expect(button.text()).toEqual(text.login);
  });
});
