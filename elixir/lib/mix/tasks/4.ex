defmodule Mix.Tasks.LeetcodeElixir.MedianOfTwoSortedArrays do
  use Mix.Task

  defmodule Solution do
    @infinity :math.pow(10, 6)

    @spec find_median_sorted_arrays(nums1 :: [integer], nums2 :: [integer]) :: float
    def find_median_sorted_arrays(nums1, nums2) do
      partition(nums1, nums2)
    end

    defp partition([], nums),
      do:
        if(length(nums) |> rem(2) == 0,
          do:
            ((nums |> Enum.at(div(length(nums), 2))) +
               (nums |> Enum.at(div(length(nums), 2) - 1))) /
              2,
          else: nums |> Enum.at(div(length(nums), 2))
        )

    defp partition(nums1, nums2) when length(nums1) <= length(nums2),
      do: partition(nums1, nums2, 0, length(nums1))

    defp partition(nums1, nums2),
      do: partition(nums2, nums1)

    defp partition(nums1, nums2, x_start, x_end) do
      minus = fn x, y -> x - y end
      len = x_end - x_start

      x_partion = max(len |> div(2), x_start)
      y_partion = (length(nums1) + length(nums2) + 1) |> div(2) |> minus.(x_partion)

      jump = max(div(x_partion - x_start, 2), 1)

      max_left_x = if(x_partion == 0, do: -@infinity, else: Enum.at(nums1, x_partion - 1))
      min_right_x = if(x_partion == length(nums1), do: @infinity, else: Enum.at(nums1, x_partion))
      max_left_y = if(y_partion == 0, do: -@infinity, else: Enum.at(nums2, y_partion - 1))
      min_right_y = if(y_partion == length(nums2), do: @infinity, else: Enum.at(nums2, y_partion))

      cond do
        max_left_x > min_right_y && len > 0 ->
          partition(nums1, nums2, x_partion - jump, x_partion)

        max_left_y > min_right_x && len > 0 ->
          partition(nums1, nums2, x_partion + jump, x_end)

        true ->
          if(rem(length(nums1) + length(nums2), 2) == 0) do
            (max(max_left_x, max_left_y) + min(min_right_x, min_right_y)) / 2
          else
            max(max_left_x, max_left_y)
          end
      end
    end
  end

  @shortdoc "Median of two sorted arrays"
  def run(_args) do
    IO.inspect(Solution.find_median_sorted_arrays([1, 2], [3]))
  end
end
