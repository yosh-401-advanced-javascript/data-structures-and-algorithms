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

    expect(pseudoTest.dequeue()).toEqual(10);
  });

  test('Can push multiple values onto the output stack', () => {
    let pseudoTest = new PseudoQueue;

    pseudoTest.enqueue(10);
    pseudoTest.enqueue(20);
    pseudoTest.enqueue(30);
    pseudoTest.enqueue(40);

    expect(pseudoTest.dequeue()).toEqual(10);
    expect(pseudoTest.dequeue()).toEqual(20);
    expect(pseudoTest.dequeue()).toEqual(30);
    expect(pseudoTest.dequeue()).toEqual(40);
  });

  test('Test will fail if output if LIFO', () => {
    let pseudoTest = new PseudoQueue;
    pseudoTest.enqueue(10);
    pseudoTest.enqueue(20);
    pseudoTest.enqueue(30);
    pseudoTest.enqueue(40);

    expect(pseudoTest.dequeue()).not.toEqual(40);
    expect(pseudoTest.dequeue()).not.toEqual(30);
    expect(pseudoTest.dequeue()).not.toEqual(20);
    expect(pseudoTest.dequeue()).not.toEqual(10);
  });
});