/**
 * Definition for singly-linked list.
 *
 * */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let prevNode: ListNode | null = null;

  while (head !== null) {
    const newHead: ListNode | null = head.next;
    head.next = prevNode;
    prevNode = head;
    head = newHead;
  }

  return prevNode;
}

const printList = (head: ListNode | null): void => {
  while (head !== null) {
    console.log(head.val);
    head = head.next;
  }
};

const input: ListNode | null = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
let expectedOutput = new ListNode(
  5,
  new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1))))
);

console.log("Input:");
printList(input);

console.log("Expected output:");
printList(expectedOutput);

const actualOutput = reverseList(input);

console.log("Actual output:");
printList(actualOutput);
