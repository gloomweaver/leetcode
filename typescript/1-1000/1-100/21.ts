type Maybe<T> = T | null | undefined;

class ListNode {
  val: number;
  next: Maybe<ListNode>;
  constructor(val?: number, next?: Maybe<ListNode>) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: Maybe<ListNode>,
  list2: Maybe<ListNode>
): Maybe<ListNode> {
  let res = new ListNode();
  let cur = res;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    cur = cur.next;
  }

  cur.next = list1 || list2;
  return res.next;
}
