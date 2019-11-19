import React from 'react';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import { NookPlants, text } from './index';
import 'jest-enzyme';
import styles from './styles.css';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);

describe('NookPlants component', () => {
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
    wrapper = mount(
      <Router>
        <NookPlants {...props} />
      </Router>,
    );
  });

  it('should mount a NookPlants component', () => {
    const element = wrapper.find(NookPlants);
    expect(element).toExist();
  });

  it('should render a div element', () => {
    const element = wrapper.find('div').find({ className: styles.nookPlants });
    expect(element).toExist();
  });

  it('should mount a SubHeader component', () => {
    const element = wrapper.find('SubHeader');
    expect(element).toExist();
    expect(element.prop('title')).toEqual(text.YourPlants);
    expect(element.prop('plantCount')).toEqual(props.plants.length);
  });

  it('should mount a PlantList component', () => {
    const element = wrapper.find('PlantList');
    expect(element).toExist();
    expect(element.prop('plants')).toEqual(props.plants);
  });
});
