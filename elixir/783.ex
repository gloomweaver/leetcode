defmodule TreeNode do
  @type t :: %__MODULE__{
          val: integer,
          left: TreeNode.t() | nil,
          right: TreeNode.t() | nil
        }
  defstruct val: 0, left: nil, right: nil
end

defmodule Solution do
  @spec min_diff_in_bst(root :: TreeNode.t() | nil) :: integer
  def min_diff_in_bst(root) do
    bst_to_list(root)
    |> Enum.chunk_every(2, 1, :discard)
    |> Enum.map(fn [x, y] -> y - x end)
    |> Enum.min()
  end

  defp bst_to_list(nil), do: []

  defp bst_to_list(root) do
    bst_to_list(root.left) ++ [root.val] ++ bst_to_list(root.right)
  end
end
