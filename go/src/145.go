package main

func recursePostOrderTraversal(root *TreeNode, res *[]int) {
	if root == nil {
		return
	}

	recursePostOrderTraversal(root.Left, res)
	recursePostOrderTraversal(root.Right, res)
	*res = append(*res, root.Val)
}

func postorderTraversal(root *TreeNode) []int {
	res := []int{}
	recursePostOrderTraversal(root, &res)
	return res
}
