// @ts-ignore
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  head = new ListNode(0, head);
  let cur: ListNode | null = head;
  while (cur && cur.next && cur.next.next) {
    const temp = cur;
    const first = cur.next;
    const second = cur.next.next;

    cur.next = second;
    first.next = second.next;
    second.next = first;

    cur = temp.next.next;
  }

  return head.next;
}
