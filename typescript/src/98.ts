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

function isValidBST(
  root: TreeNode | null,
  min = -Number.MAX_VALUE,
  max = Number.MAX_VALUE
): boolean {
  if (!root) return true;

  return (
    root.val > (root.left?.val ?? -Number.MAX_VALUE) &&
    root.val < (root.right?.val ?? Number.MAX_VALUE) &&
    root.val > min &&
    root.val < max &&
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
}
