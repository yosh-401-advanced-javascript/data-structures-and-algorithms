# Remove Duplicated in a Linked List


## Challenge
Remove the duplicate values in a linked list

## Approach & Efficiency
First and foremost, I misread the challenge. I went after the stretch goal and had no clue how to do it.
My whiteboard will verify that. It needed to use a map, but I hadnt really had time to study them much.

Removing a single duplicate node from a linked list: Iterate through the linked list. Whenever you encounter
a node, store it in the map. If the the current value is already there, break the link and go to the next node.

Space: O(n)
Time: O(1)...?

```
  removeDuplicate(value) {

    const map = new Map();

    let current = this.head;
    while (current) {
      current = this.next;
      map.get(current.value);
    }
    while (map.has(current.value)) {
      current = current.next.next;
    }
  }
}
```
## API
N/A

## Solution
![White Board](assets/IMG_6248.jpg)
