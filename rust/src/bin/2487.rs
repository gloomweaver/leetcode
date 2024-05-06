#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    fn new(val: i32) -> Self {
        ListNode { next: None, val }
    }
}

struct Solution {}

impl Solution {
    pub fn reverse_list(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut prev: Option<Box<ListNode>> = None;
        let mut cur = head;

        while let Some(mut node) = cur.take() {
            cur = node.next;
            node.next = prev.take();
            prev = Some(node);
        }

        prev
    }

    pub fn reverse_and_remove_nodes(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut prev: Option<Box<ListNode>> = None;
        let mut cur = head;
        let mut max_val = i32::MIN;

        while let Some(mut node) = cur.take() {
            if node.val > max_val {
                max_val = node.val;
            }
            cur = node.next;

            if node.val < max_val {
                continue;
            }
            node.next = prev.take();
            prev = Some(node);
        }

        prev
    }

    pub fn remove_nodes(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let reversed_head = Solution::reverse_list(head);
        let new_head = Solution::reverse_and_remove_nodes(reversed_head);

        new_head
    }
}

fn main() {}
