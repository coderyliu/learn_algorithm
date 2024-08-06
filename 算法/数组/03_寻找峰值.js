/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let num = nums[0]
  if (nums.length === 1) return 0
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] > num) {
      num = nums[i]
    } else {
      return i - 1
    }
  }
  return i - 1
};