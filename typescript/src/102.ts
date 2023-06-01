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

function recurse(root: TreeNode | null, level: number, res: number[][]) {
  if (!root) return;
  if (res.length === level) {
    res.push([]);
  }
  res[level].push(root.val);
  recurse(root.left, level + 1, res);
  recurse(root.right, level + 1, res);
}

function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  recurse(root, 0, res);
  return res;
}
