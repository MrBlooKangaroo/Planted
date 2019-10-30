import React from 'react';
import { cleanup } from 'react-testing-library';
import { mount } from 'enzyme';
import 'jest-enzyme';
import { Login } from './index';

import { GoogleLogin } from 'react-google-login';

afterEach(cleanup);

describe('Login', () => {
  let props, wrapper;

  describe('when authenticated', () => {
    beforeEach(() => {
      props = {
        isAuthenticated: false,
      };

      wrapper = mount(<Login {...props} />);
    });

    it('should mount a Login component', () => {
      const LoginComponent = wrapper.find(Login);
      expect(LoginComponent).toBeDefined();
    });

    it('should render a google signin button', () => {
      const button = wrapper.find(GoogleLogin);
      expect(button).toBeDefined();
      expect(button.text()).toEqual('Login');
    });
  });

  describe('when not authenticated', () => {
    beforeEach(() => {
      props = {
        isAuthenticated: true,
      };

      wrapper = mount(<Login {...props} />);
    });

    it('should render a google logout button', () => {
      const button = wrapper.find('button');
      expect(button).toBeDefined();
      expect(button.text()).toEqual('Log out');
    });
  });
});
