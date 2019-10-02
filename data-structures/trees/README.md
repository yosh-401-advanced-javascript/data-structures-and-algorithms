# Find the path length on a tree
Find the path length on a tree

## Challenge
Find the path length on a binary tree recursively

## Approach & Efficiency
The idea was to traverse the tree, left to right until the parent was
found. Once the parent was found, it would be pushed to the stack.
After that the next nodes would be pushed into the stack until the 
child was found. That would be pushed in and then return the 
length of the stack minus 1 to account for the extra node.

O(n)
O(h)


## API
No API's were harmed in the making of this challenge.

[whiteboard](assets/IMG_6795.HEIC)