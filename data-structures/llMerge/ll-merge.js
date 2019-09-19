'use strict';

const LinkedList = require('../linked-lists/linked-list');


const traverse = (node, callback) => {
  let current = node;
  while ( current ) {
    callback( current );
    current = current.next;
  }
};

const toArray = (node) => {
  let arr = [];
  traverse(node,(v) => arr.push(v.value));
  return arr;
};

const mergeLists = (head1, head2) => {
  while (head2) {
    let anchor = head2.next;
    head2.next = head1.next;
    head1.next = head2;
    head2 = anchor;
    head1 = head1.next.next === null ? head1.next : head1.next.next;
  }
};

module.exports = {
  LinkedList: LinkedList,
  mergeLists: mergeLists,
  toArray: toArray,
};