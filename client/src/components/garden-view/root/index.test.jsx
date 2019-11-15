import 'jest-enzyme';
import { sortByNookName } from '.';

describe('sortByNookName function', () => {
  it('should return nooks in the correct, alphabetical order', () => {
    const initialNooks = [{ name: 'Foyer' }, { name: 'Bathroom' }];
    const responseNooks = initialNooks.sort(sortByNookName);
    expect(responseNooks).toBeDefined();
    expect(responseNooks[0].name).toBe('Bathroom');
    expect(responseNooks[1].name).toBe('Foyer');
  });
});
