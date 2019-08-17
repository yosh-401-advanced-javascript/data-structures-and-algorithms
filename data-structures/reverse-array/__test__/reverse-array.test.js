'use strict';

let validator = require('../reverse-array.js');

describe('validate that the array is reversed', () => {
  it('reverses arrays with negatives', () => {
    expect(validator.reverseArrayInPlace(
        [89, 2354, 3546, 23, 10, -923, 823, -12])).
        toEqual([-12, 823, -923, 10, 23, 3546, 2354, 89])
  })
  it('reverses arrays with nothing in them', () => {
    expect(validator.reverseArrayInPlace([])).toEqual([]);
  })
  it('reverses odd arrays', () => {
    expect(
        validator.reverseArrayInPlace([1, 2, 3, 4, 5])).
        toEqual([5, 4, 3, 2, 1]);
  })
  it('reverses even arrays', () => {
    expect(validator.reverseArrayInPlace([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
  })
})
