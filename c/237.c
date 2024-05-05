struct ListNode
{
  int val;
  struct ListNode *next;
};

void deleteNode(struct ListNode *node)
{
  struct ListNode *temp = node->next;
  *node = *node->next;
  free(temp);
}
