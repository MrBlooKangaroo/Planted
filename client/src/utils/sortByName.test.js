import 'jest-enzyme';
import sortByName from 'utils/sortByName';

describe('sortByName function', () => {
  it('should return list in the correct, alphabetical order by name', () => {
    const initialList = [{ name: 'Foyer' }, { name: 'Bathroom' }];
    const responseList = initialList.sort(sortByName);
    expect(responseList).toBeDefined();
    expect(responseList[0].name).toBe('Bathroom');
    expect(responseList[1].name).toBe('Foyer');
  });
});
