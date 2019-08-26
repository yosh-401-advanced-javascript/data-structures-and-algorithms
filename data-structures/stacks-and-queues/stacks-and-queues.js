'use strict';



class Node {
  constructor( data, next = null ) {
    this.data = data;
    this.next = next;
  }

  // traverse(callback) {
  //   let current = this;
  //   while ( current ) {
  //     callback( current );
  //     current = current.next;
  //   }
  // }
}

class Stack {
  constructor(top) {
    this.top = null;
  }

  push(item) {
    let node = new Node(item);

    if (this.top) {
      node.next = this.top;
      this.top = node;
    } else {
      this.top = node;
    }
  }

  peek() {
    return this.top.data;
  }

  pop() {
    let node = this.top;
    this.top = node.next;
    return node.data;
  }
}

class Queue {
  constructor( front ) {
    this.front = null;
    this.back = null;
  }

  enqueue( back ) {
    let node = new Node(back);

    if (this.back) {
      this.back.next = node;
      this.back = this.back.next;
    } else {
      this.front = node;
      this.back = this.front;
    }
  }

  peek() {
    return this.front.data;
  }

  dequeue() {
    let node = this.front;
    if ( this.front === null ) {
      return;
    }
    this.front = node.next;
    if ( this.front === null ) {
      this.back = this.front;
    }
    return node.data;
  }
}

module.exports = {
  Stack: Stack,
  Queue: Queue,
};