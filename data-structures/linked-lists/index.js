'use strict';

const LinkedList = require('./linked-list');

const linkedList = new LinkedList();


linkedList.appendRecursively(10);
linkedList.appendRecursively(20);
linkedList.appendRecursively(30);
console.log(linkedList);