'use strict';

let LinkedList = require('../linked-list');
const linkedList = new LinkedList;


describe('Can Successfully add a node to the end of the linked list', () => {
  it('Can Successfully add a node to the end of the linked list', () => {
    const linkedList = new LinkedList;
    linkedList.insertAtHead(1);
    linkedList.insertAtHead(2);
    expect(linkedList.head.value).toEqual(2);
    expect(linkedList.head.value.next).toEqual(1);

  });


  xit('Can successfully add multiple nodes to the end of a linked list', () => {
    expect(linkedList.appendRecursively(1)).toEqual(1);

  });

  xit('Can successfully insert a node before a node located in the middle of a linked list', () => {
    expect(linkedList.appendRecursively(2)).toEqual(1);
  });

  xit('Can successfully insert a node before the first node of a linked list', () => {
    expect(linkedList.appendRecursively(1)).toEqual(1, 2, 3, 4, 5);
  });
});

xdescribe('validates values', () => {
  it('Can successfully insert a node in the middle of a linked list',
    () => {
      linkedList.appendRecursively(1);
      linkedList.appendRecursively(666);
      expect(linkedList.includes(1)).
        toEqual(true);
    });
  xit('Can successfully insert a node after the last node of the linked list',
    () => {
      expect(linkedList.includes(999)).
        toEqual(false);
    });
});

