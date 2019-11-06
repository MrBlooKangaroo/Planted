import React from 'react';
import { cleanup } from 'react-testing-library';
import { mount } from 'enzyme';
import { PlantCard } from './index';
import 'jest-enzyme';
import { isTerminating } from 'apollo-link/lib/linkUtils';

afterEach(cleanup);

describe('PlantCard component', () => {
  let wrapper, props;

  props = {
    plant: {
      photoUrl: 'fakePhotoUrl',
      name: 'fakeName',
    },
  };

  beforeEach(() => {
    wrapper = mount(<PlantCard {...props} />);
  });

  it('should mount a PlantCard component', () => {
    const PlantCardComponent = wrapper.find(PlantCard);
    expect(PlantCardComponent).toExist();
  });

  it('should render a div element with correct className', () => {
    const divElement = wrapper.find('div');
    expect(divElement).toExist();
    expect(divElement.prop('className')).toEqual('plantBox');
  });

  it('should render a pharagraph element with same name text as prop', () => {
    const pElement = wrapper.find('p');
    expect(pElement).toExist();
    expect(pElement.text()).toEqual(props.plant.name);
    expect(pElement.prop('className')).toEqual('plantName');
  });

  it('should render a img element with same src as prop photoUrl', () => {
    const imgElement = wrapper.find('img');
    expect(imgElement).toExist();
    expect(imgElement.prop('src')).toEqual(props.plant.photoUrl);
    expect(imgElement.prop('className')).toEqual('plantPic');
  });
});
