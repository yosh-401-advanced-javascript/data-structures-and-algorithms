'use strict';
const { Stack } = require('../stacks-and-queues/stacks-and-queues');


class PseudoQueue {
  constructor() {
    this.stackInput= new Stack;
    this.stackOutput = new Stack;
  }

  enqueue(value) {
    this.stackInput.push(value);
  }

  dequeue(){

    if(this.stackOutput === null) {
      while( this.stackInput.peek()) {
        this.stackOutput.push(this.stackInput.pop());
      }
    }
    // return this.stackOutput.pop();
  }
}



module.exports = {
  PseudoQueue: PseudoQueue,
};
