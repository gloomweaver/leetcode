defmodule Mix.Tasks.LeetcodeElixir.InvertBinaryTree do
  use Mix.Task

  defmodule TreeNode do
    @type t :: %__MODULE__{
            val: integer,
            left: TreeNode.t() | nil,
            right: TreeNode.t() | nil
          }
    defstruct val: 0, left: nil, right: nil
  end

  defmodule Solution do
    @spec invert_tree(root :: TreeNode.t() | nil) :: TreeNode.t() | nil
    def invert_tree(nil), do: nil

    def invert_tree(%TreeNode{} = root) do
      root |> Map.put(:left, invert_tree(root.right)) |> Map.put(:right, invert_tree(root.left))
    end
  end

  @shortdoc "Invert Binary Tree"
  def run(_args) do
  end
end
