import React from 'react';
import { mount, configure } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import { arrowLeft, arrowRight, emptyNook } from 'assets/icons';
import NookCarousel from '.';
import styles from './styles.css';
import 'jest-enzyme';

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe('NookCarousel Component', () => {
  const nook = { name: 'Foyer' },
    plants = [
      {
        photoUrl: 'www.photo.net',
        plantType: {
          photoUrlHorizontalCrop: 'www.photoCropped.net',
        },
      },
      {
        photoUrl: 'www.pic.net',
        plantType: {
          photoUrlHorizontalCrop: 'www.picUncropped.me',
        },
      },
    ],
    onArrowClick = () => {};
  let element,
    props,
    carouselIndex = 0,
    currentPlant = plants[0];

  beforeEach(() => {
    props = {
      nook,
      currentPlant,
      plants,
      carouselIndex,
      onArrowClick,
    };
    element = mount(<NookCarousel {...props} />);
  });

  it('should mount a nookCarousel component', () => {
    const nookCarouselComponent = element.find(NookCarousel);
    expect(nookCarouselComponent).toExist();
  });

  it('should be passed all required props', () => {
    const nookCarouselProps = element.props();
    expect(nookCarouselProps).toBeDefined();
    expect(nookCarouselProps.nook).toBeDefined();
    expect(nookCarouselProps.nook.name).toBe(nook.name);
    expect(nookCarouselProps.nook.luxLevel).toBe(nook.luxLevel);
    expect(nookCarouselProps.currentPlant).toBeDefined();
    expect(nookCarouselProps.currentPlant.photoUrl).toBe(currentPlant.photoUrl);
    expect(
      nookCarouselProps.currentPlant.plantType.photoUrlHorizontalCrop,
    ).toBe(currentPlant.plantType.photoUrlHorizontalCrop);
    expect(nookCarouselProps.carouselIndex).toBeDefined();
    expect(nookCarouselProps.carouselIndex).toBe(carouselIndex);
    expect(nookCarouselProps.onArrowClick).toBeDefined();
    expect(typeof nookCarouselProps.onArrowClick).toBe('function');
  });

  it('should render an img tag with same src as prop photoUrl', () => {
    const nookCardPhoto = element.find('.nookCardPhoto');
    expect(nookCardPhoto).toExist();
    expect(nookCardPhoto.prop('src')).toEqual(currentPlant.photoUrl);
    expect(nookCardPhoto.prop('className')).toEqual(styles.nookCardPhoto);
  });

  it("should render an img tag with same src as prop plantType's photoUrlHorizontalCrop if the current plant has no photoUrl", () => {
    element = element.setProps({
      currentPlant: {
        photoUrl: null,
        plantType: {
          photoUrlHorizontalCrop: 'www.photoCropped.net',
        },
      },
    });
    const nookCardPhoto = element.find('.nookCardPhoto');
    expect(nookCardPhoto).toExist();
    expect(nookCardPhoto.prop('src')).toEqual(
      currentPlant.plantType.photoUrlHorizontalCrop,
    );
    expect(nookCardPhoto.prop('className')).toEqual(styles.nookCardPhoto);
  });

  it('should render an img tag with empty nook photo if currentPlant prop is null', () => {
    element.setProps({ currentPlant: null });
    const emptyNookPhoto = element.find('.emptyNookClass');
    expect(emptyNookPhoto).toExist();
    expect(emptyNookPhoto.prop('src')).toEqual(emptyNook);
    expect(emptyNookPhoto.prop('className')).toEqual(styles.emptyNookClass);
  });

  it('should render arrowRight if carouselIndex is 0 and there is more than one plant', () => {
    const arrowRightElement = element.find('img.arrowRightClass');
    expect(arrowRightElement).toBeDefined();
    expect(arrowRightElement.prop('src')).toEqual(arrowRight);
    expect(arrowRightElement.prop('className')).toEqual(styles.arrowRightClass);
  });

  it('should NOT render arrowRight if carouselIndex is 0', () => {
    element.setProps({ carouselIndex: plants.length - 1 });
    const arrowLeft = element.find('.arrowRightClass');
    expect(arrowLeft.length).toBe(0);
  });

  it('should render arrowLeft if carouselIndex is not 0', () => {
    element.setProps({ carouselIndex: 1 });
    const arrowLeftElement = element.find('img.arrowLeftClass');
    expect(arrowLeftElement).toBeDefined();
    expect(arrowLeftElement.prop('src')).toEqual(arrowLeft);
    expect(arrowLeftElement.prop('className')).toEqual(styles.arrowLeftClass);
  });

  it('should NOT render arrowLeft if carouselIndex is 0', () => {
    const arrowLeft = element.find('.arrowLeftClass');
    expect(arrowLeft.length).toBe(0);
  });
});
