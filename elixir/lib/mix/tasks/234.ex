defmodule Mix.Tasks.LeetcodeElixir.PalindromeLinkedList do
  use Mix.Task

  defmodule ListNode do
    @type t :: %__MODULE__{
            val: integer,
            next: ListNode.t() | nil
          }
    defstruct val: 0, next: nil
  end

  defmodule Solution do
    @spec is_palindrome(head :: ListNode.t() | nil) :: boolean
    def is_palindrome(nil),
      do: true

    def is_palindrome(%ListNode{next: nil}),
      do: true

    def is_palindrome(head) do
      second_half_start = find_middle(head) |> reverse
      compare(head, second_half_start)
    end

    @shortdoc "find middle node"
    defp find_middle(slow),
      do: find_middle(slow, slow)

    defp find_middle(slow, nil),
      do: slow

    defp find_middle(nil, nil),
      do: nil

    defp find_middle(slow, %ListNode{next: nil}),
      do: slow

    defp find_middle(slow, fast),
      do: find_middle(slow.next, fast.next.next)

    @shortdoc "Reverse linked list"
    defp reverse(head) do
      reverse(head, nil)
    end

    defp reverse(%ListNode{next: nil} = l1, prev),
      do: Map.put(l1, :next, prev)

    defp reverse(head, prev) do
      reverse(head.next, Map.put(head, :next, prev))
    end

    @shortdoc "Compare linked list"
    @spec compare(head1 :: ListNode.t() | nil, head2 :: ListNode.t() | nil) :: boolean
    defp compare(nil, nil),
      do: true

    defp compare(nil, _),
      do: true

    defp compare(_, nil),
      do: true

    defp compare(%ListNode{} = l1, %ListNode{} = l2) do
      l1.val == l2.val && compare(l1.next, l2.next)
    end
  end

  @shortdoc "Palindrom linked list"
  def run(_args) do
    IO.inspect(
      Solution.is_palindrome(%ListNode{
        val: 1,
        next: %ListNode{val: 0, next: %ListNode{val: 1}}
      })
    )
  end
end
