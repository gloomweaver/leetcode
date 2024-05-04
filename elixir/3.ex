defmodule Solution do
  @spec length_of_longest_substring(s :: String.t()) :: integer
  def length_of_longest_substring(s) do
    get_result = fn {max, start, _} ->
      if String.length(s) - start > max, do: String.length(s) - start, else: max
    end

    if String.length(s) < 2 do
      String.length(s)
    else
      s
      |> String.graphemes()
      |> Enum.with_index(fn element, index -> {element, index} end)
      |> Enum.reduce({0, 0, %{}}, fn {char, char_index}, {max, start, map} ->
        value = Map.get(map, char)

        case value !== nil && value >= start do
          true ->
            new_start = Map.get(map, char) + 1
            new_map = Map.put(map, char, char_index)
            new_max = if char_index - start > max, do: char_index - start, else: max
            {new_max, new_start, new_map}

          false ->
            new_map = Map.put(map, char, char_index)
            {max, start, new_map}
        end
      end)
      |> get_result.()
    end
  end
end
