import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import HeaderRow, { headerRowText } from '.';

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe('HeaderRow Component', () => {
  let element, props;
  beforeEach(() => {
    props = {
      nooks: [{ name: 'Bathroom' }, { name: 'Foyer' }],
      plantTotal: 3,
      isAlphabeticallySorted: true,
      toggleSort: () => {},
    };
    element = mount(
      <BrowserRouter>
        <HeaderRow {...props} />
      </BrowserRouter>,
    );
  });

  it('should mount the headerRow component', () => {
    const headerRow = element.find(HeaderRow);
    expect(headerRow).toExist();
  });

  it('should be passed all required props', async () => {
    const headerRowProps = element.props();
    expect(headerRowProps.nooks).toBeDefined();
    expect(headerRowProps.nooks.length).toBe(2);
    expect(headerRowProps.plantTotal).toBeDefined();
    expect(typeof headerRowProps.plantTotal).toBe('number');
    expect(headerRowProps.isAlphabeticallySorted).toBeDefined();
    expect(typeof headerRowProps.isAlphabeticallySorted).toBe('boolean');
    expect(headerRowProps.toggleSort).toBeDefined();
    expect(typeof headerRowProps.toggleSort).toBe('function');
  });

  it('should have the header text', () => {
    expect(element.text()).toContain(headerRowText.header);
  });

  it('should have the forwardsSort text', () => {
    expect(element.text()).toContain(headerRowText.alphabeticalOrderText);
  });

  it('should flip from A - Z to Z - A on click', () => {
    element.setProps({ isAlphabeticallySorted: false });
    const headerRowComponent = element.find(HeaderRow);
    expect(headerRowComponent.text()).toContain(
      headerRowText.reverseAlphabeticalOrderText,
    );
  });
});

describe('gardenStats function', () => {
  it('should return corresponding sub header text', () => {
    const gardenStats = headerRowText.gardenStats(3, 10);
    expect(gardenStats).toBeDefined();
    expect(gardenStats).toBe('3 nooks • 10 plants');
  });
});
