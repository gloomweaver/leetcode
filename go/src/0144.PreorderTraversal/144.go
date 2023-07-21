package preorder_traversal

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func recursePreorderTraversal(root *TreeNode, res *[]int) {
	if root == nil {
		return
	}

	*res = append(*res, root.Val)
	recursePreorderTraversal(root.Left, res)
	recursePreorderTraversal(root.Right, res)
}

func preorderTraversal(root *TreeNode) []int {
	res := []int{}
	recursePreorderTraversal(root, &res)
	return res
}
