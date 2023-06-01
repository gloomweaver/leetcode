type Maybe<T> = T | null | undefined;

class ListNode {
  val: number;
  next: Maybe<ListNode>;
  constructor(val?: number, next?: Maybe<ListNode>) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: Maybe<ListNode>): boolean {
  let slow = head;
  let fast = head;
  while (slow && fast) {
    slow = slow.next;
    fast = fast.next?.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
