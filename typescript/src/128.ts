function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let maxStreak = 0;
  for (const num of nums) {
    if (!set.has(num - 1)) {
      let cur = num;
      let streak = 0;
      while (set.has(cur)) {
        streak++;
        cur++;
      }

      maxStreak = Math.max(maxStreak, streak);
    }
  }
  return maxStreak;
}
