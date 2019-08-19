'use strict';

let validator = require('../linked-list');
const linkedList = new validator;
describe('validates the instanciation of an empty list', () => {
  it('validates the instantiation of an empty list', () => {
    linkedList.insertAtHead(1);
    expect(linkedList.insertAtHead().value).toEqual(this.head);
  });


  it('validates that insert is functioning', () => {
    expect(linkedList.insertAtHead(1).value).toEqual(1);

  });

  it('validates that head is pointing to the first node', () => {
    expect(linkedList.insertAtHead(2).next.value).toEqual(1);
  });

  it('validates that multiple nodes are inserted', () => {
    const linkedList = new validator();
    expect(linkedList.insertAtHead(1).value).toEqual(1, 2, 3, 4, 5);
  });
});

describe('validates values', () => {
  it('validates that will return true when finding a value within the linked list',
    () => {
      linkedList.insertAtHead(1);
      linkedList.insertAtHead(666);
      expect(linkedList.includes(1)).
        toEqual(true);
    });
  it('validates that will return false  when looking for a value that doesnt exist',
    () => {
      expect(linkedList.includes(999)).
        toEqual(false);
    });
});
describe('Creates a Collection', () => {
  const linkedList = new validator();
  linkedList.insertAtHead(5);
  linkedList.insertAtHead(33);
  linkedList.insertAtHead(22);
  it('can properly return all a collection of all values within the list', () => {
    expect(linkedList.toString(validator)).toEqual(this.head);
  });
});

