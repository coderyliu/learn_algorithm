// https://leetcode.cn/problems/contains-duplicate-ii/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], i)
    } else {
      const num = map.get(nums[i])
      const ret = Math.abs(num - i)
      if (ret <= k) return true
      map.set(nums[i], i)
    }
  }
  return false
};
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))