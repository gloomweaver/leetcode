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
