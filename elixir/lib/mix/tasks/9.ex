defmodule Mix.Tasks.LeetcodeElixir.PalindromNumber do
  use Mix.Task

  defmodule Solution do
    @spec is_palindrome(x :: integer) :: boolean
    def is_palindrome(x),
      do: if(x >= 0, do: Integer.digits(x) == Enum.reverse(Integer.digits(x)), else: false)
  end

  @shortdoc "Palindrom number"
  def run(_args) do
  end
end
