// https://leetcode.cn/problems/contains-duplicate/?plan=sohu&plan_progress=zyhqdyj

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// ?哈希表
var containsDuplicate = function (nums) {
  //todo 简单做法
  // const res = [...new Set(nums)]
  // if (res.length === nums.length) return false

  // return true

  // todo 复杂做法
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1)
  }

  for (const item of map) {
    if (item[1] >= 2) {
      return true
    }
  }

  return false
};