// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// keep two pointers
// fast will start by walking n times to the next
// then slow will walk until fast reaches the end
// doing this, we have the slow pointing to the previous node that must be deleted

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let fast = head,
    slow = head;

  // move the fast n times
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // if fast is null, return head.next
  if (!fast) {
    return head.next;
  }

  // move the fast to the last node
  // and the slow to the previous node to be deleted
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  // connect previous with nth next
  slow.next = slow.next.next;

  return head;
}
