class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function inorderTraversal(root: TreeNode | null) {
  const res: number[] = [];
  recurseInorderTraversal(root, res);
  return res;
}

function recurseInorderTraversal(
  root: TreeNode | null,
  res: number[] = []
): void {
  if (!root) {
    return;
  }

  recurseInorderTraversal(root.left, res);
  res.push(root.val);
  recurseInorderTraversal(root.right, res);
}
