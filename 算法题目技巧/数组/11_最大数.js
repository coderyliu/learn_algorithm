// https://leetcode.cn/problems/largest-number/

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums.sort((a, b) => (a.toString() + b.toString()) < (b.toString() + a.toString()) ? 1 : -1);
  //  console.log(nums);
  if (nums[0] === 0) return '0';
  return nums.join('');
};