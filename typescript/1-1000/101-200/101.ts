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

function recurse(left: TreeNode | null, right = left): boolean {
  if (!left && !right) return true;
  if (!left || !right) return false;
  return (
    left.val === right.val &&
    recurse(left.left, right.right) &&
    recurse(left.right, right.left)
  );
}

function isSymmetric(root: TreeNode | null): boolean {
  return recurse(root);
}
