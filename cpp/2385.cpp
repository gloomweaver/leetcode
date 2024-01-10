#include <algorithm>
#include <utility>

struct TreeNode
{
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode() : val(0), left(nullptr), right(nullptr) {}
  TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
  TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution
{
private:
  int maxDistance = 0;
  int traverse(TreeNode *root, int start)
  {
    int depth = 0;
    if (root == nullptr)
    {
      return depth;
    }

    int leftDepth = traverse(root->left, start);
    int rightDepth = traverse(root->right, start);

    if (root->val == start)
    {
      maxDistance = std::max(leftDepth, rightDepth);
      depth = -1;
    }
    else if (leftDepth >= 0 && rightDepth >= 0)
    {
      depth = std::max(leftDepth, rightDepth) + 1;
    }
    else
    {
      int distance = abs(leftDepth) + abs(rightDepth);
      maxDistance = std::max(maxDistance, distance);
      depth = std::min(leftDepth, rightDepth) - 1;
    }

    return depth;
  }

public:
  int amountOfTime(TreeNode *root, int start)
  {
    traverse(root, start);
    return maxDistance;
  }
};
