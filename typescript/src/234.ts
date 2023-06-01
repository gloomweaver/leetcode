class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function isPalindrome(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  let prev: ListNode | null = null;
  while (slow) {
    let temp = slow!.next;
    slow!.next = prev;
    prev = slow;
    slow = temp;
  }

  while (head && prev) {
    if (head?.val !== prev?.val) {
      return false;
    }
    head = head?.next;
    prev = prev?.next;
  }

  return true;
}
