// https://leetcode.cn/problems/wiggle-sort-ii/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  let temp = nums.slice()
  temp.sort((a, b) => a - b)
  let r = nums.length
  let mid = Math.floor((nums.length + 1) / 2)
  for (let l = 0; l < nums.length; l++) {
    nums[l] = l % 2 === 0 ? temp[--mid] : temp[--r]
  }

  return nums
};