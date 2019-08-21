'use strict';



class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(value) {
    const newHead = new Node(value);
    if (this.head === null) {
      this.head = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    return this.head;
  }

  traverse() {
    let current = this.head;
    while (current !== null) {
      current = current.next;
    }
  }

  includes(value) {
    let found = false;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        found = true;
      }
      current = current.next;
    }
    return found;
  }

  toString() {
    let current = this.head;
    let valuesToString = '';
    while (current) {
      valuesToString += String(current.value);
      current = current.next;
    }
  }


  appendRecursively(value) {
    if (this.head === null) {
      this.head = new Node(value);
      return;
    }
    this.appendRecursivelyHelper(value, this.head);

  }

  appendRecursivelyHelper(value, current) {
    if (current.next === null) {
      current.next = new Node(value);
      return;
    }
    this.appendRecursivelyHelper(value, current.next);

  }


  findFromEnd(k) {
    let fast = 0;
    let slow = k - 1;
    let current = this.head;
    while (current !== null){
      fast++;
      slow++;
      current = current.next;
    }
    return slow;
  }


}

module.exports = LinkedList;



