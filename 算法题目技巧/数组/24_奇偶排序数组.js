// https://leetcode.cn/problems/sort-array-by-parity-ii/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  const arr1 = []
  const arr2 = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      arr1.push(nums[i])
    } else {
      arr2.push(nums[i])
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      nums[i] = arr1.shift()
    } else {
      nums[i] = arr2.shift()
    }
  }

  return nums
};