package main

func binarySearch(nums []int, left int, right int, target int) int {
	if left >= right {
		return left
	}

	mid := left + (right-left)/2

	if target == nums[mid] {
		return mid
	} else if target < nums[mid] {
		return binarySearch(nums, left, mid, target)
	} else {
		return binarySearch(nums, mid+1, right, target)
	}
}

func searchInsert(nums []int, target int) int {
	return binarySearch(nums, 0, len(nums), target)
}
