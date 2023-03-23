/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// ?1.暴力
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if ((nums[i] + nums[j]) === target) return [i, j]
    }
  }
};

// ?2.哈希表
var twoSum = function (nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const reset = target - nums[i]
    if (!map.has(reset)) {
      map.set(nums[i], i)
    } else {
      return [map.get(reset), i]
    }
  }
}