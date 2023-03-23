// https://leetcode.cn/problems/maximum-product-subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
  let ans = nums[0];
  let minValue = nums[0];
  let maxValue = nums[0];
  let minProduct = 0;
  let maxProduct = 0;
  for (let i = 1; i < nums.length; i++) {
    minProduct = minValue * nums[i];
    maxProduct = maxValue * nums[i];
    // 更新最大值，最小值。
    minValue = Math.min(minProduct, maxProduct, nums[i]);
    maxValue = Math.max(minProduct, maxProduct, nums[i]);
    ans = Math.max(maxValue, ans);
  }

  return ans;
};