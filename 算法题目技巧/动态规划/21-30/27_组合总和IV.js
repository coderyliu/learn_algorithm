// https://leetcode-cn.com/problems/combination-sum-iv/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 回溯算法栈溢出
// var combinationSum4 = function (nums, target) {
//   let res = 0

//   function backTracking(sum) {
//     if (sum > target) return
//     if (sum === target) {
//       res++
//       return
//     }
//     for (let i = 0; i < nums.length; i++) {
//       sum += nums[i]
//       backTracking(sum)
//       sum -= nums[i]
//     }
//   }
//   backTracking(0)

//   console.log(res)
// };

var combinationSum4 = function (nums, target) {
  const dp = Array(target + 1).fill(0)
  dp[0] = 1
  for (let i = 0; i <= target; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i >= nums[j]) {
        dp[i] += dp[i - nums[j]]
      }
    }
  }
  // console.log(dp)
  return dp[target]
}
combinationSum4([1, 2, 3], 4)
combinationSum4([3], 9)
combinationSum4([9], 3)