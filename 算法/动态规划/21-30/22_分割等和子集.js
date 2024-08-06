/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 这道题其实可以找的是数组中是否有总和为数组和一半的两个数组
var canPartition = function (nums) {
  const sum = nums.reduce((pre, cur) => {
    return pre + cur
  }, 0)
  if (sum / 2 !== Math.floor(sum / 2)) return false
  const target = sum / 2
  if (nums.indexOf(target) !== -1) return true
  const len = nums.length
  // 1-二维dp
  const dp = Array(len + 1).fill(0).map(i => {
    return Array(target + 1).fill(0)
  })
  for (let i = 1; i <= len; i++) {
    for (let j = 0; j <= target; j++) {
      if (nums[i - 1] <= j) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - nums[i - 1]] + nums[i - 1])
      } else {
        dp[i][j] = dp[i - 1][j]
      }
      if (dp[i][j] === target) {
        return true
      }
    }
  }
  return dp[len][target] === target

  // 2-一维dp
  // const dp = Array(target + 1).fill(0)
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = target; j >= nums[i]; j--) {
  //     dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
  //     if (dp[j] === target) {
  //       return true
  //     }
  //   }
  // }
  // return dp[target] === target
};
console.log(canPartition([1, 5, 11, 5]))