package trapping_rain_water

func maxInt(arg1 int, arg2 int) int {
	if arg1 > arg2 {
		return arg1
	}

	return arg2
}

func minInt(arg1 int, arg2 int) int {
	if arg1 < arg2 {
		return arg1
	}

	return arg2
}

func trap(height []int) int {
	l, r := 0, len(height)-1
	maxL, maxR := height[l], height[r]
	volume := 0

	for l < r {
		if maxL < maxR {
			l++
			maxL = maxInt(height[l], maxL)
			volume += maxInt(minInt(maxL, maxR)-height[l], 0)
		} else {
			r--
			maxR = maxInt(height[r], maxR)
			volume += maxInt(minInt(maxL, maxR)-height[r], 0)
		}
	}

	return volume
}
