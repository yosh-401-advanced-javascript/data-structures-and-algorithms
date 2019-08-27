'use strict';

const { PseudoQueue } = require('../queueWithStacks');

describe('TESTING PSEUDOQUEUE',() => {
  test('Can push on to the input stack', () => {
    let pseudoTest = new PseudoQueue;

    pseudoTest.enqueue(10);

    expect(pseudoTest.stackInput.peek()).toEqual(10);
  });

  test('Can push multiple values onto the input stack', () => {
    let pseudoTest = new PseudoQueue;

    pseudoTest.enqueue(10);
    pseudoTest.enqueue(12);

    expect(pseudoTest.stackInput.pop()).toEqual(12);
    expect(pseudoTest.stackInput.pop()).toEqual(10);
  });

  test('Can push a value onto the output stack', () => {
    let pseudoTest = new PseudoQueue;

    pseudoTest.enqueue(10);
    pseudoTest.enqueue(20);

    expect(pseudoTest.dequeue).toEqual(10);


  });
});