/**
 * @param {number[]} nums
 * @return {number}
 */
// ?动态规划
var findLengthOfLCIS = function (nums) {
  const dp = new Array(nums.length).fill(1)

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      dp[i] = Math.max(dp[i], dp[i - 1] + 1)
    }
  }

  return Math.max(...dp)
};

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]))