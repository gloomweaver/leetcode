package main

func recurseTraversal(root *TreeNode, res *[]int) {
	if root == nil {
		return
	}

	*res = append(*res, root.Val)
	recurseTraversal(root.Left, res)
	recurseTraversal(root.Right, res)
}

func preorderTraversal(root *TreeNode) []int {
	res := []int{}
	recurseTraversal(root, &res)
	return res
}
