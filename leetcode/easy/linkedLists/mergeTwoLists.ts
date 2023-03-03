// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let mergedList: ListNode = new ListNode();
  const head: ListNode = mergedList;

  while (list1 !== null || list2 !== null) {
    // compare values of the two lists and inserts the smallest
    if (list1 && list2) {
      if (list1.val <= list2.val) {
        mergedList.next = list1;
        list1 = list1.next;
      } else {
        mergedList.next = list2;
        list2 = list2.next;
      }
    }
    // if one of the lists ends, we just copy the remaninig list and exit the loop
    else if (list1) {
      mergedList.next = list1;
      break;
    } else {
      mergedList.next = list2;
      break;
    }
    mergedList = mergedList.next;
  }

  return head.next;
}
