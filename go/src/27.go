package main

func removeElement(nums []int, val int) int {
	curIdx := 0

	for i := 0; i < len(nums); i++ {
		if nums[i] != val {
			nums[curIdx] = nums[i]
			curIdx++
		}
	}

	return curIdx
}
