// 给你一个整数数组 nums 和一个整数 k,判断数组中是否存在两个不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  // 方法一：暴力 时间复杂度 O(n^2)
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] === nums[j] && Math.abs(i - j) <= k) return true;
  //   }
  // }

  // return false;

  // 方法二：哈希表 时间复杂度 O(n)
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const idx = map.get(nums[i]);
      if (Math.abs(idx - i) <= k) return true;
      map.set(nums[i], i);
    } else {
      map.set(nums[i], i);
    }
  }
  return false;
}

export {};
