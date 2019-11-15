import React from 'react';
import { mount, configure } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import NookInfo from '.';
import styles from './styles.css';
import 'jest-enzyme';
import getLuxOrCycleIcon from 'utils/getLuxOrCycleIcon';

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe('NookInfo Component', () => {
  let element, props;
  const nook = { name: 'Foyer', luxLevel: 'MEDIUM' },
    currentUser = { photoUrl: 'www.photo.net', firstName: 'Planty' },
    plantTotalText = '2 plants';

  beforeEach(() => {
    props = {
      nook,
      currentUser,
      plantTotalText,
    };
    element = mount(<NookInfo {...props} />);
  });

  it('should mount a NookInfo component', () => {
    const component = element.find(NookInfo);
    expect(component).toExist();
  });

  it('should be passed all required props', () => {
    const nookInfoProps = element.props();
    expect(nookInfoProps).toBeDefined();
    expect(nookInfoProps.nook).toBeDefined();
    expect(nookInfoProps.nook.name).toBe(nook.name);
    expect(nookInfoProps.nook.luxLevel).toBe(nook.luxLevel);
    expect(nookInfoProps.currentUser).toBeDefined();
    expect(nookInfoProps.currentUser.photoUrl).toBe(currentUser.photoUrl);
    expect(nookInfoProps.currentUser.firstName).toBe(currentUser.firstName);
    expect(nookInfoProps.plantTotalText).toBeDefined();
    expect(nookInfoProps.plantTotalText).toBe(plantTotalText);
  });

  it('should render the nook name', () => {
    expect(element.text()).toContain(nook.name);
  });

  it('should render the plantTotalText', () => {
    expect(element.text()).toContain(plantTotalText);
  });

  it('should render an img tag with same src as prop photoUrl', () => {
    const userPhoto = element.find('.userPhoto');
    expect(userPhoto).toExist();
    expect(userPhoto.prop('src')).toBe(currentUser.photoUrl);
    expect(userPhoto.prop('className')).toBe(styles.userPhoto);
  });

  it("should render the proper icon given the nook's luxLevel", () => {
    const luxLevelIcon = element.find('.luxLevelIcon');
    const luxIcon = getLuxOrCycleIcon(
      'luxLevel',
      nook.luxLevel,
      'unselected',
      styles.luxLevelIcon,
    );
    expect(luxLevelIcon).toExist();
    expect(luxLevelIcon.prop('src')).toBe(luxIcon.props.src);
    expect(luxLevelIcon.prop('className')).toBe(styles.luxLevelIcon);
  });
});
