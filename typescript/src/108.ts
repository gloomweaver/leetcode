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

function recurse(
  nums: number[],
  left = 0,
  right = nums.length - 1
): TreeNode | null {
  if (left > right) {
    return null;
  }

  const mid = Math.trunc(left + (right - left) / 2);

  const node = new TreeNode(nums[mid]);
  node.left = recurse(nums, left, mid - 1);
  node.right = recurse(nums, mid + 1, right);
  return node;
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  return recurse(nums);
}
