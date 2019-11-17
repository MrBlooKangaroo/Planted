import getLuxOrCycleIcon from './getLuxOrCycleIcon';
import 'jest-enzyme';

describe('getLuxOrCycleIcon', () => {
  it('should be able to use getLuxOrCycleIcon function', () => {
    const icon = getLuxOrCycleIcon('luxLevel', 'HIGH', 'selected', {});
    expect(icon).toBeDefined();
    expect(icon.props.src).toBe('luxSelectedHigh.svg');
    expect(icon.props.alt).toBe('luxLevel:HIGH');
    expect(Object.keys(icon.props.className).length).toBe(0);
  });
});
