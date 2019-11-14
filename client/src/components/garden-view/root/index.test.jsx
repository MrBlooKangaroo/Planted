import React from 'react';
import { mount, configure } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import Garden, { gardenText } from '.';

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe('Garden Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Garden />);
  });

  it('should define the Garden component', () => {
    const gardenComponent = wrapper.find(Garden);
    expect(gardenComponent).toExist();
  });

  it('should have the header text', () => {
    expect(wrapper.text()).toContain(gardenText.header);
  });
});
