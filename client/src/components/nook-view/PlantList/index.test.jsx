import React from 'react';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import { PlantList } from './index';
import 'jest-enzyme';
import styles from './styles.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { EmptyBanner } from '../EmptyBanner';

afterEach(cleanup);

describe('PlantList component with one plant', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      plants: [
        {
          id: 'e476ab1b-1e35-40e5-ba76-f2b9e146686c',
          photoUrl: 'fakePhotoUrl',
          name: 'fakeName',
        },
      ],
    };

    wrapper = mount(
      <Router>
        <PlantList {...props} />
      </Router>,
    );
  });

  it('should mount a PlantList component', () => {
    const element = wrapper.find(PlantList);
    expect(element).toExist();
  });

  it('should render the EmptyBanner element', () => {
    wrapper.setProps({ plants: [] });
    const element = wrapper.find('EmptyBanner');
    expect(element).toBeDefined();
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
