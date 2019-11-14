import React from 'react';
import { mount, configure } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import NookCardSmall from '.';
import NookCarousel from '../NookCarousel';
import NookInfo from '../NookInfo';

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe('NookCardSmall Component', () => {
  let element, props;
  const name = 'Foyer',
    luxLevel = 'MEDIUM',
    plant = {
      plantType: { photoUrlHorizontalCrop: 'www.url.com' },
    };
  beforeEach(() => {
    props = {
      nook: {
        name,
        luxLevel,
        plants: [plant],
      },
    };
    element = mount(<NookCardSmall {...props} />);
  });

  it('should mount the NookCardSmall component', () => {
    const nookCardSmallComponent = element.find(NookCardSmall);
    expect(nookCardSmallComponent).toExist();
  });

  it('should be passed all required props', async () => {
    const nookProp = element.props().nook;
    expect(nookProp).toBeDefined();
    expect(nookProp.name).toBeDefined();
    expect(nookProp.name).toBe(name);
    expect(nookProp.luxLevel).toBeDefined();
    expect(nookProp.luxLevel).toBe(luxLevel);
    expect(nookProp.plants).toBeDefined();
    expect(nookProp.plants.length).toBe(1);
    expect(nookProp.plants[0].plantType).toBeDefined();
    expect(nookProp.plants[0].plantType).toBe(plant.plantType);
    expect(nookProp.plants[0].plantType.photoUrlHorizontalCrop).toBeDefined();
    expect(nookProp.plants[0].plantType.photoUrlHorizontalCrop).toBe(
      plant.plantType.photoUrlHorizontalCrop,
    );
  });

  it('should mount the NookCarousel component', () => {
    const nookCarouselComponent = element.find(NookCarousel);
    expect(nookCarouselComponent).toExist();
  });

  it('should mount the NookInfo component', () => {
    const nookInfoComponent = element.find(NookInfo);
    expect(nookInfoComponent).toExist();
  });
});
