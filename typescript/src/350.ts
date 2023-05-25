function intersect(nums1: number[], nums2: number[]): number[] {
  if (nums1.length > nums2.length) {
    return intersect(nums2, nums1);
  }
  const map = new Map<number, number>();
  for (const num of nums1) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  const res: number[] = [];
  for (const num of nums2) {
    if (map.get(num) || 0 > 0) {
      res.push(num);
      map.set(num, map.get(num)! - 1);
    }
  }
  return res;
}
