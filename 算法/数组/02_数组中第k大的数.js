/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // const newArr = [...new Set(nums)].sort((a, b) => a - b)
  // return newArr[newArr.length - k]
  nums.sort((a, b) => a - b)
  return nums[nums.length - k]
};