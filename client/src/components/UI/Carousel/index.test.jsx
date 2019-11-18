import React from 'react';
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import { Carousel } from './index';
import styles from './styles.css';
import 'jest-enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);

describe('Carousel component', () => {
  let wrapper, props;

  props = {
    plants: [
      {
        id: 'e476ab1b-1e35-40e5-ba76-f2b9e146686c',
        photoUrl: 'fakePhotoUrl',
        name: 'fakeName',
      },
    ],
    name: 'Wishes',
  };

  beforeEach(() => {
    wrapper = mount(
      <Router>
        <Carousel {...props} />
      </Router>,
    );
  });

  it('should mount a Carousel component', () => {
    const element = wrapper.find('div').find({ className: styles.carousel });
    expect(element).toExist();
  });

  it('should mount a div element', () => {
    const element = wrapper.find('div');
    expect(element).toExist();
    expect(element.at(0).prop('className')).toEqual(styles.carousel);
  });

  it('should render a Left Button element', () => {
    const element = wrapper.find('LeftButton');
    expect(element).toExist();
  });

  it('should render a Right Button element', () => {
    const element = wrapper.find('RightButton');
    expect(element).toExist();
  });
});
