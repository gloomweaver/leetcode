defmodule Mix.Tasks.LeetcodeElixir.AddTwoNumbers do
  use Mix.Task

  defmodule ListNode do
    @moduledoc """
    Definition for singly-linked list.
    """
    @type t :: %__MODULE__{
            val: integer,
            next: t() | nil
          }
    defstruct val: 0, next: nil
  end

  defmodule Solution do
    @spec add_two_numbers(l1 :: ListNode.t() | nil, l2 :: ListNode.t() | nil) ::
            ListNode.t() | nil
    def add_two_numbers(l1, l2),
      do: add_two_number_recursive(l1, l2, false)

    defp add_two_number_recursive(nil, nil, carry?),
      do: if(carry?, do: %ListNode{val: 1}, else: nil)

    defp add_two_number_recursive(l1, nil, carry?),
      do: if(carry?, do: add_two_number_recursive(l1, %ListNode{val: 1}, false), else: l1)

    defp add_two_number_recursive(nil, l2, carry?),
      do: add_two_number_recursive(l2, nil, carry?)

    defp add_two_number_recursive(
           %ListNode{val: v1, next: n1},
           %ListNode{val: v2, next: n2},
           carry?
         ) do
      sum = v1 + v2 + if(carry?, do: 1, else: 0)
      new_carry = sum >= 10
      new_val = rem(sum, 10)
      %ListNode{val: new_val, next: add_two_number_recursive(n1, n2, new_carry)}
    end
  end

  @shortdoc "Add two numbers"
  def run(_args) do
  end
end
