import React from 'react';
import { mount, configure } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import HeaderRow, { headerRowText } from '.';

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe('HeaderRow Component', () => {
  let wrapper, props;
  beforeEach(() => {
    props = {
      nooks: [{ name: 'Bathroom' }, { name: 'Foyer' }],
      plantTotal: 3,
      isForwardSort: true,
      toggleSort: () => {},
    };
    wrapper = mount(<HeaderRow {...props} />);
  });

  it('should mount the headerRow component', () => {
    const headerRow = wrapper.find(HeaderRow);
    expect(headerRow).toExist();
  });

  it('should be passed all required props', async () => {
    expect(wrapper.props().nooks).toBeDefined();
    expect(wrapper.props().nooks.length).toBe(2);
    expect(wrapper.props().plantTotal).toBeDefined();
    expect(typeof wrapper.props().plantTotal).toBe('number');
    expect(wrapper.props().isForwardSort).toBeDefined();
    expect(typeof wrapper.props().isForwardSort).toBe('boolean');
    expect(wrapper.props().toggleSort).toBeDefined();
    expect(typeof wrapper.props().toggleSort).toBe('function');
  });

  it('should have the header text', () => {
    expect(wrapper.text()).toContain(headerRowText.header);
  });

  it('should have the forwardsSort text', () => {
    expect(wrapper.text()).toContain(headerRowText.forwardsSort);
  });

  it('should flip from A - Z to Z - A on click', () => {
    wrapper.setProps({ isForwardSort: false });
    const headerRowComponent = wrapper.find(HeaderRow);
    expect(headerRowComponent.text()).toContain(headerRowText.backwardsSort);
  });

  it('should be able to use gardenStats function', () => {
    const gardenStats = headerRowText.gardenStats(3, 10);
    expect(gardenStats).toBeDefined();
    expect(gardenStats).toBe('3 nooks • 10 plants');
  });
});
