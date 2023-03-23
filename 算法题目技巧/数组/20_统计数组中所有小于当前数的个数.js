// https: //leetcode.cn/problems/how-many-numbers-are-smaller-than-the-current-number/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// ?最简单的方法直接暴力
var smallerNumbersThanCurrent = function (nums) {
  const res = []
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    count = 0
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count++
      }
    }
    res.push(count)
  }
  console.log(res)
};

// ? 排序比较+map
var smallerNumbersThanCurrent = function (nums) {
  const res = []
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    map.set(i, nums[i])
  }
  nums.sort((a, b) => a - b)
  for (const item of map) {
    res.push(nums.indexOf(item[1]))
  }
  console.log(res)
};
smallerNumbersThanCurrent([8, 1, 2, 2, 3])
smallerNumbersThanCurrent([6, 5, 4, 8])