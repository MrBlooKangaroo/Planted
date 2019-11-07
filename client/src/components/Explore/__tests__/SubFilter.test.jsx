import React from 'react';
import { mount, configure } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import SubFilter, { subFilterText } from '../Dropdown/SubFilter';
import FilterIcon from '../../UI/icons/FilterIcon';
import getLuxOrCycleIcon from '../../../utils/getLuxOrCycleIcon';

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe('SubFilter Component', () => {
  let element, props;
  beforeEach(() => {
    props = { isSelected: () => {}, type: 'luxLevel' };
    element = mount(<SubFilter {...props} />);
  });

  it('should mount the SubFilter components', () => {
    const subFilter = element.find(SubFilter);
    expect(subFilter).toExist();
  });

  it('should pass the isSelected and type props', () => {
    expect(element.props().isSelected).toBeDefined();
    expect(element.props().type).toBeDefined();
  });

  it('should mount the FilterIcon components', () => {
    const filterIcons = element.find(FilterIcon);
    expect(filterIcons).toExist();
    expect(filterIcons.length).toBe(3);
  });

  it("should have the subfilter's text", () => {
    const text = element.find(SubFilter).text();
    expect(text).toContain(subFilterText.lightIntensity);
  });

  it('should be able to use getLuxOrCycleIcon function', () => {
    const className = {};
    const icon = getLuxOrCycleIcon('luxLevel', 'HIGH', 'selected', className);
    expect(icon).toBeDefined();
    expect(icon.props.src).toBe('luxSelectedHigh.svg');
    expect(icon.props.alt).toBe('luxLevel:HIGH');
    expect(Object.keys(icon.props.className).length).toBe(0);
  });
});
