defmodule Mix.Tasks.LeetcodeElixir.MedianOfTwoSortedArrays do
  use Mix.Task

  defmodule Solution do
    @infinity :math.pow(10, 6)

    @spec find_median_sorted_arrays(nums1 :: [integer], nums2 :: [integer]) :: float
    def find_median_sorted_arrays(nums1, nums2) do
      partition(nums1 |> List.to_tuple(), nums2 |> List.to_tuple())
    end

    defp partition({}, nums),
      do:
        if(tuple_size(nums) |> rem(2) == 0,
          do:
            ((nums |> elem(div(tuple_size(nums), 2))) +
               (nums |> elem(div(tuple_size(nums), 2) - 1))) /
              2,
          else: nums |> elem(div(tuple_size(nums), 2))
        )

    defp partition(nums1, nums2) when tuple_size(nums1) <= tuple_size(nums2),
      do: partition(nums1, nums2, 0, tuple_size(nums1))

    defp partition(nums1, nums2),
      do: partition(nums2, nums1)

    defp partition(nums1, nums2, x_start, x_end) do
      minus = fn x, y -> x - y end

      x_partion = (x_start + x_end) |> div(2) |> round

      y_partion =
        (tuple_size(nums1) + tuple_size(nums2) + 1) |> div(2) |> round |> minus.(x_partion)

      max_left_x = if(x_partion == 0, do: -@infinity, else: elem(nums1, x_partion - 1))

      min_right_x =
        if(x_partion == tuple_size(nums1), do: @infinity, else: elem(nums1, x_partion))

      max_left_y = if(y_partion == 0, do: -@infinity, else: elem(nums2, y_partion - 1))

      min_right_y =
        if(y_partion == tuple_size(nums2), do: @infinity, else: elem(nums2, y_partion))

      cond do
        max_left_y <= min_right_x && max_left_x <= min_right_y ->
          if(rem(tuple_size(nums1) + tuple_size(nums2), 2) == 0) do
            (max(max_left_x, max_left_y) + min(min_right_x, min_right_y)) / 2
          else
            max(max_left_x, max_left_y)
          end

        max_left_x > min_right_y ->
          partition(nums1, nums2, x_start, x_partion - 1)

        true ->
          partition(nums1, nums2, x_partion + 1, x_end)
      end
    end
  end

  @shortdoc "Median of two sorted arrays"
  def run(_args) do
    IO.inspect(Solution.find_median_sorted_arrays([1, 2], []))
  end
end
