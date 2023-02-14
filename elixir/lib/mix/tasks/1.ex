defmodule Mix.Tasks.LeetcodeElixir.AddTwoNumbers do
  use Mix.Task

  defmodule Solution do
    @spec two_sum(nums :: [integer], target :: integer) :: [integer]
    def two_sum(nums, target) do
      nums
      |> Enum.with_index()
      |> Enum.reduce_while({[], %{}}, fn {num, index}, {res, map} ->
        diff = target - num

        if Map.has_key?(map, diff) do
          {:halt, {[Map.get(map, diff), index], map}}
        else
          {:cont, {res, Map.put(map, num, index)}}
        end
      end)
      |> elem(0)
    end
  end

  @shortdoc "Add two numbers"

  def run(_args) do
    IO.puts('result for [1, 3], 4')
    IO.inspect(Solution.two_sum([1, 3], 4))
  end
end
