// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(node: ListNode | null): void {
  // delete the next instead of the current
  // get the current nextNode
  if (!node) return;

  let nextNode = node.next;
  // update curr value with the next
  node.val = nextNode.val;

  // connect the current next to the next next
  node.next = nextNode.next;

  // disconnect the next from the linked list
  nextNode?.next = null;
}

export {};
