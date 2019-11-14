import React from 'react';
import { mount, configure } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import NookList from '.';
import NookCardSmall from '../../UI/nook-cards/NookCardSmall';

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe('Nook List Component', () => {
  let element, props;
  beforeEach(() => {
    props = {
      nooks: [
        {
          name: 'Bathroom',
          luxLevel: 'MEDIUM',
          plants: {
            nookId: '12345',
          },
        },
        {
          name: 'Foyer',
          luxLevel: 'LOW',
          plants: {
            nookId: '678910',
          },
        },
      ],
    };
    element = mount(<NookList {...props} />);
  });

  it('should mount the NookList component', () => {
    const categoryList = element.find(NookList);
    expect(categoryList).toExist();
  });

  it('should mount the NookCardSmall components', () => {
    const nookCardComponents = element.find(NookCardSmall);
    expect(nookCardComponents).toExist();
    expect(nookCardComponents.length).toBe(2);
  });

  it('should mount the NookCardSmall components', () => {
    const nookCardComponents = element.find(NookCardSmall);
    nookCardComponents.forEach(nookCardComponent => {
      expect(nookCardComponent.props().nook).toBeDefined();
    });
  });
});
