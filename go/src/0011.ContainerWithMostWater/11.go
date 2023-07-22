package container_with_most_water

func minInt(arg1 int, arg2 int) int {
	if arg1 < arg2 {
		return arg1
	}
	return arg2
}

func maxArea(height []int) int {
	max := 0

	l, r := 0, len(height)-1

	for l < r {
		area := (r - l) * minInt(height[l], height[r])
		if area > max {
			max = area
		}

		if height[l] > height[r] {
			r--
		} else {
			l++
		}
	}

	return max
}
