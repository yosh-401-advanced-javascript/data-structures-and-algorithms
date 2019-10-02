'use strict';

class BinaryTree {
  constructor() {
    this.root = null;
  }
}
module.exports = class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

const findMaximumValue = (value) => {
  if (this.root === null) {
  return null;
} else {
    let currentNode = this.root;
        if(currentNode.value !== null && value <= currentNode.value){
        currentNode.value = currentNode.left;
      } else {
          currentNode.value = currentNode.right;
        }
        if(currentNode.right.value > currentNode.left.value){
          return currentNode.right;
    }
        return currentNode.left;
  }

};
findMaximumValue();













module.exports = {
  BinaryTree: BinaryTree,
  Node: Node,
};
