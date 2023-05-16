// @ts-ignore
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getSize(head: ListNode | null): number {
  let cur = head;
  let size = 0;

  while (cur) {
    cur = cur.next;
    size++;
  }

  return size;
}

function getN(head: ListNode | null, n: number): ListNode | null {
  let cur = head;
  while (cur && n > 0) {
    cur = cur.next;
    n--;
  }
  return cur;
}

function swap(firstPrev: ListNode, secondPrev: ListNode) {
  const first = firstPrev.next!;
  const second = secondPrev.next!;

  firstPrev.next = second;
  secondPrev.next = first;

  const temp = first.next;
  first.next = second.next;
  second.next = temp;
}

function swapNodes(head: ListNode | null, k: number): ListNode | null {
  const size = getSize(head);
  head = new ListNode(0, head);

  const firstPrev = getN(head, k - 1);
  const secondPrev = getN(head, size - k);
  swap(firstPrev!, secondPrev!);

  return head.next;
}
