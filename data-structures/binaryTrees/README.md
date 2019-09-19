#Find the Max Value in a Binary Tree

## Challenge
To find the maximum value of a node in a binary tree.

## Approach & Efficiency
The goal here was to traverse the tree and look at the next node. If the next node was
less than the value of the next node, we would move to that node,
until we found the hight value. After analyzing the left side of the
tree, we would have a look at the right side of the tree, do the same thing
and compare values. 

I havnt gotten around to testing yet, but I think the issue with my code
thus far is: as soon as I find a value bigger than the node that im in,
I move to the right tree and start comparing.


## Solution

![UML](/assets/IMG_1490.HEIC)
