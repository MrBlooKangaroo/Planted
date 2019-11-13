import React from 'react';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import { PlantList } from './index';
import 'jest-enzyme';
import styles from './styles.css';

afterEach(cleanup);

describe('PlantList component with one plant', () => {
  let wrapper, props;

  props = {
    plants: [
      {
        id: 'e476ab1b-1e35-40e5-ba76-f2b9e146686c',
        photoUrl: 'fakePhotoUrl',
        name: 'fakeName',
      },
    ],
  };

  beforeEach(() => {
    wrapper = mount(<PlantList {...props} />);
  });

  it('should mount a PlantList component', () => {
    const element = wrapper.find(PlantList);
    expect(element).toExist();
  });

  it('should render the EmptyBanner element', () => {
    wrapper.setProps({ plants: [] });
    const element = wrapper.find('EmptyBanner');
    expect(element).toExist();
  });

  it('should render the WidePlantGrid element', () => {
    const element = wrapper.find('WidePlantGrid');
    expect(element).toExist();
    expect(element.prop('plants')).toEqual(props.plants);
  });

  it('should render the div element', () => {
    const element = wrapper
      .find('div')
      .find({ className: styles.controlPagination });
    expect(element).toExist();
  });
});
