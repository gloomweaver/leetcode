class ListNode {
  val: number;
  next: ListNode | null | undefined;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(
  head: ListNode | null | undefined,
  n: number
): ListNode | null | undefined {
  head = new ListNode(0, head);
  let slow: ListNode | null | undefined = head;
  let fast: ListNode | null | undefined = head;
  for (let i = 0; i <= n; i++) {
    fast = fast?.next;
  }
  while (fast?.next) {
    slow = slow?.next;
    fast = fast.next;
  }
  const deletedNode = slow?.next;
  slow!.next = deletedNode?.next;
  return head.next;
}
