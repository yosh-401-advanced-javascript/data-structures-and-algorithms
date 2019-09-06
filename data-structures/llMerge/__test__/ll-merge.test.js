'use strict';

const { LinkedList, mergeLists, toArray } = require('../ll-merge');

let head1 = new LinkedList();
let head2 = new LinkedList();
head1.insertAtHead(3);
head1.insertAtHead(2);
head1.insertAtHead(1);
head2.insertAtHead('c');
head2.insertAtHead('b');
head2.insertAtHead('a');

describe('TESTING LINKED LIST MERGES!!!', () => {
  test('Checking to see if values are added to the two linked lists', () =>{
    let head1 = new LinkedList();
    let head2 = new LinkedList();
    head1.insertAtHead(3);
    head1.insertAtHead(2);
    head1.insertAtHead(1);
    head2.insertAtHead('c');
    head2.insertAtHead('b');
    head2.insertAtHead('a');

    expect(toArray(head1.head)).toEqual([1, 2, 3]);
    expect(toArray(head2.head)).toEqual(['a', 'b', 'c']);
  });

  test('Checking to see if lists can be merged', () => {
    let head1 = new LinkedList();
    let head2 = new LinkedList();
    head1.insertAtHead(3);
    head1.insertAtHead(2);
    head1.insertAtHead(1);

    head2.insertAtHead('c');
    head2.insertAtHead('b');
    head2.insertAtHead('a');

    mergeLists(head1.head, head2.head);
    console.log(toArray(head1.head));
    expect(toArray(head1.head)).toEqual([1, 'a', 2, 'b', 3, 'c']);
  });

  test('Checking functionality if list 1 is bigger than list 2', () => {
    let head1 = new LinkedList();
    let head2 = new LinkedList();
    head1.insertAtHead(5);
    head1.insertAtHead(4);
    head1.insertAtHead(3);
    head1.insertAtHead(2);
    head1.insertAtHead(1);
    head2.insertAtHead('c');
    head2.insertAtHead('b');
    head2.insertAtHead('a');

    mergeLists(head1.head, head2.head);
    console.log(toArray(head1.head));
    expect(toArray(head1.head)).toEqual([1, 'a', 2, 'b', 3, 'c', 4, 5]);
  });

  test('Checking functionality if list 2 is bigger than list 1', () => {
    let head1 = new LinkedList();
    let head2 = new LinkedList();
    head1.insertAtHead(3);
    head1.insertAtHead(2);
    head1.insertAtHead(1);
    head2.insertAtHead('elephant');
    head2.insertAtHead('d');
    head2.insertAtHead('c');
    head2.insertAtHead('b');
    head2.insertAtHead('a');

    mergeLists(head1.head, head2.head);
    console.log(toArray(head1.head));
    expect(toArray(head1.head)).toEqual([1, 'a', 2, 'b', 3, 'c', 'd', 'elephant']);
  });

});




