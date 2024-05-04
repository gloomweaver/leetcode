type Maybe<T> = T | null | undefined;

class ListNode {
  val: number;
  next: Maybe<ListNode>;
  constructor(val?: number, next?: Maybe<ListNode>) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: Maybe<ListNode>): Maybe<ListNode> {
  let prev: Maybe<ListNode> = null;
  let curr: Maybe<ListNode> = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
