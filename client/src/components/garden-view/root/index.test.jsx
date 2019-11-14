import 'jest-enzyme';
import { sortByName } from '.';

describe('Garden Component', () => {
  it('should be able to use sortByName function', () => {
    const initialNooks = [{ name: 'Foyer' }, { name: 'Bathroom' }];
    const responseNooks = initialNooks.sort(sortByName);
    expect(responseNooks).toBeDefined();
    expect(responseNooks[0].name).toBe('Bathroom');
    expect(responseNooks[1].name).toBe('Foyer');
  });
});
