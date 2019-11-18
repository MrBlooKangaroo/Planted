import React from 'react';
import { mount, configure } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import { BaseGarden } from '.';
import HeaderRow from '../HeaderRow';

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe('BaseGarden Component', () => {
  let wrapper, props;
  beforeEach(() => {
    props = {
      nooks: [{ name: 'Foyer' }, { name: 'Bathroom' }],
    };
    wrapper = mount(<BaseGarden {...props} />);
  });

  it('should mount the BaseGarden component', () => {
    const baseGardenComponent = wrapper.find(BaseGarden);
    expect(baseGardenComponent).toExist();
  });

  it('should mount the HeaderRow component', () => {
    const headerRowComponent = wrapper.find(HeaderRow);
    expect(headerRowComponent).toExist();
  });

  it('should be passed all required props', async () => {
    expect(wrapper.props().nooks).toBeDefined();
    expect(wrapper.props().nooks.length).toBe(2);
  });

  it('should render a div with the className of gardenContainer', () => {
    const plantTypeList = wrapper.find('div.gardenContainer');
    expect(plantTypeList).toBeDefined();
  });
});
