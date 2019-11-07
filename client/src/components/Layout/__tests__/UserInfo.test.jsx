import React from 'react';
import { mount, configure } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import UserInfo, { userInfoText } from '../NavBar/UserInfo';

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe('UserInfo Component', () => {
  let wrapper, props, photoUrl;
  beforeEach(() => {
    photoUrl = 'corey.png';
    props = { photoUrl, onLogout: () => {} };
    wrapper = mount(<UserInfo {...props} />);
  });

  it('should mount the userInfo component', () => {
    const userInfoComponent = wrapper.find(UserInfo);
    expect(userInfoComponent).toExist();
  });

  it('should be passed all required props', async () => {
    expect(wrapper.props().photoUrl).toBeDefined();
    expect(wrapper.props().onLogout).toBeDefined();
  });

  it('should have logo text', () => {
    expect(wrapper.text()).toContain(userInfoText.logout);
  });

  it("should render an imaghe of the user's google photo", () => {
    const userPhoto = wrapper.find('img');
    expect(userPhoto).toBeDefined();
    expect(userPhoto.props().src).toBe(photoUrl);
    expect(userPhoto.props().alt).toBe(photoUrl);
  });
});
