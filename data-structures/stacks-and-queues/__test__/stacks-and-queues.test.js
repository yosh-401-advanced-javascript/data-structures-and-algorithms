'use strict';

const { Queue, Stack } = require('../stacks-and-queues');

describe('TESTING STACKS!', () => {
  test('Can successfully push onto a stack', () => {
    let stackTest = new Stack;

    stackTest.push(10);

    expect(stackTest.top.data).toEqual(10);
  });

  test('Can successfully push multiple values onto a stack', () => {
    let stackTest = new Stack;

    stackTest.push(10);
    stackTest.push(20);
    stackTest.push(30);

    expect(stackTest.top.data).toEqual(30);
    expect(stackTest.top.next.data).toEqual(20);
    expect(stackTest.top.next.next.data).toEqual(10);
  });
  test('Can successfully pop off the stack', () => {
    let stackTest = new Stack;

    stackTest.push(30);

    expect(stackTest.pop()).toEqual(30);

  });
  test('empty a stack after multiple pops', () => {
    let stackTest = new Stack;

    stackTest.push(10);
    stackTest.push(20);
    stackTest.push(30);

    expect(stackTest.pop()).toEqual(30);
    expect(stackTest.pop()).toEqual(20);
    expect(stackTest.pop()).toEqual(10);
  });

  test('peek the next item on the stack', () => {
    let stackTest = new Stack;

    stackTest.push(100);
    stackTest.push(200);
    stackTest.push(300);
    stackTest.push(400);

    expect(stackTest.peek()).toEqual(400);
  });

  test('Can successfully instantiate an empty stack', () =>{
    let stackTest = new Stack;
    expect(stackTest).toBeDefined();
    expect(stackTest).toBeInstanceOf(Stack);
  });
});

describe('Testing Queues!!', () => {
  test('Can successfully enqueue into a queue', () => {
    const queueTest = new Queue;
    queueTest.enqueue(1);

    expect(queueTest.front.data).toEqual(1);
  });
  test('Can successfully enqueue multiple values into a queue', () => {
    const queueTest = new Queue;
    queueTest.enqueue(1);
    queueTest.enqueue(2);
    queueTest.enqueue(3);

    expect(queueTest.front.data).toEqual(1);
    expect(queueTest.front.next.data).toEqual(2);
    expect(queueTest.front.next.next.data).toEqual(3);
  });

  test('Can successfully dequeue out of a queue the expected value', () => {
    const queueTest = new Queue;
    queueTest.enqueue(1);

    expect(queueTest.dequeue()).toEqual(1);
  });

  test('Can successfully peek into a queue, seeing the expected value', () => {
    const queueTest = new Queue;
    queueTest.enqueue(1);

    expect(queueTest.peek()).toEqual(1);
  });

  test('Can successfully empty a queue after multiple dequeues', () => {
    const queueTest = new Queue;
    queueTest.enqueue(1);
    queueTest.enqueue(2);
    queueTest.enqueue(3);
    queueTest.enqueue(4);
    queueTest.enqueue(5);
    queueTest.enqueue(16);

    expect(queueTest.dequeue()).toEqual(1);
    expect(queueTest.dequeue()).toEqual(2);
    expect(queueTest.dequeue()).toEqual(3);
    expect(queueTest.dequeue()).toEqual(4);
    expect(queueTest.dequeue()).toEqual(5);
    expect(queueTest.dequeue()).toEqual(16);
    expect(queueTest.dequeue()).toEqual(undefined);
  });

  test('Can successfully instantiate an empty queue', () => {
    const queueTest = new Queue;
    expect(queueTest).toBeDefined();
    expect(queueTest).toBeInstanceOf(Queue);
  });
});


