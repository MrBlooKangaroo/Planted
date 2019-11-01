import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import { greetings, buttons } from '../../../constants/texts';
import { cleanup } from 'react-testing-library';
import HomePageRoot from './index';

afterEach(cleanup);

describe('HomePageRoot', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      history: {
        push: jest.fn(),
      },
    };
    wrapper = shallow(<HomePageRoot {...props} />);
  });

  it('should mount a HomePageRoot component', () => {
    wrapper.setState({ hideLogin: false });
    const homePageRootComponent = wrapper.find(HomePageRoot);
    expect(homePageRootComponent).toBeDefined();
  });

  it('should render a signin with spotify button when a user is not signed in', () => {
    wrapper.setState({ hideLogin: false });
    const button = wrapper.find('button');
    expect(button).toIncludeText(buttons.signin);
  });

  it('should not render a signin button when a user is logged in', () => {
    wrapper.setState({ hideLogin: true });
    const button = wrapper.find('button');
    expect(button).not.toIncludeText(buttons.signin);
  });

  it('should render a standard greeting message', () => {
    wrapper.setState({ loginFailed: false });
    const greeting = wrapper.find('.greeting');
    expect(greeting).toExist();
    expect(greeting).toIncludeText(greetings.welcome);
  });

  it('should render an error message if user does not approve app for spotify access', () => {
    wrapper.setState({ loginFailed: true });
    const greeting = wrapper.find('.greeting');
    const errorMessage = wrapper.find('.errorMessage');
    expect(greeting).toExist();
    expect(greeting).toIncludeText(greetings.authError);
    expect(errorMessage).toIncludeText(
      'Please agree to allow access in order to read reviews of your favorite artists',
    );
  });
});
