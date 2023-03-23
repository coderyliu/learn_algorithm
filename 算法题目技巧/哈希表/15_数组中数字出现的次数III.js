// https://leetcode.cn/problems/single-number-iii/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// ?1.哈希  空间复杂度O(n)
var singleNumber = function (nums) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1)
  }

  const res = []
  for (const item of map) {
    if (item[1] === 1) {
      res.push(item[0])
    }
  }
  return res
};