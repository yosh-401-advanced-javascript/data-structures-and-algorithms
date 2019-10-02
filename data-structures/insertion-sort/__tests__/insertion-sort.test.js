const insertionSort = require('../insertion-sort');

describe('Insertion Sort', () => {
  it('should sort the items', () => {
    const insert = [5, 2, 4, 6, 1, 3];
    const sorted = insertionSort(insert);
    expect(sorted).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
