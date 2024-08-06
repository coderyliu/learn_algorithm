// https://leetcode.cn/problems/contains-duplicate-iii/
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const flag = Math.abs(map.get(nums[i]) - i) <= k ? true : false
      if (0 <= t && flag) {
        return true
      }
    }
    for (const item of map) {
      const ret = Math.abs(nums[i] - item[0])
      const flag = Math.abs(item[1] - i) <= k ? true : false
      if (ret <= t && flag) return true
    }
    map.set(nums[i], i)
  }
  return false
};
console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0))
console.log(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2))
console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3))
console.log(containsNearbyAlmostDuplicate([8, 7, 15, 1, 6, 9, 15], 1, 3))
// containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3)