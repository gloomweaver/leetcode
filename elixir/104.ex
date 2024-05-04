defmodule TreeNode do
  @type t :: %__MODULE__{
          val: integer,
          left: TreeNode.t() | nil,
          right: TreeNode.t() | nil
        }
  defstruct val: 0, left: nil, right: nil
end

defmodule Solution do
  def max_depth(root), do: max_depth_recursive(root)

  defp max_depth_recursive(nil), do: 0

  defp max_depth_recursive(%TreeNode{left: l, right: r}),
    do: 1 + max(max_depth_recursive(l), max_depth_recursive(r))
end
