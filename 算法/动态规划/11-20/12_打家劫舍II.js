/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0]
  const result1 = robRange(nums, 0, nums.length - 2)
  const result2 = robRange(nums, 1, nums.length - 1)

  return Math.max(result1, result2)
}

function robRange(nums, start, end) {
  if (start === end) return nums[start]
  const dp = Array(nums.length).fill(0)
  dp[start] = nums[start]
  dp[start + 1] = Math.max(nums[start], nums[start + 1])
  for (let i = start + 2; i <= end; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }

  return dp[end]
}