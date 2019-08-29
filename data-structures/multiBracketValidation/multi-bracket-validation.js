'use strict';

const { Stack } = require('../stacks-and-queues/stacks-and-queues');


const multiBracketValidation = (input) => {

  let stack = new Stack();

  for(let char of input) {
    switch (char) {
      case '{':
      case '(':
      case '[':
        stack.push(char);
        break;
      case '}':
        if(stack.peek() !== '{')//bare
          return false;
        stack.pop();
        break;
      case ')':
        if(stack.peek() !== '(')//bare
          return false;
        stack.pop();
        break;
      case ']':
        if(stack.peek() !== '[')//bare
          return false;
        stack.pop();
        break;
    }
  }
  return stack.top === null;
};
module.exports = multiBracketValidation;