/**
 * @param {number[]} nums
 * @return {number}
 */
// ?动态规划
var rob = function (nums) {
  // ?暴力破解 这种做法错误
  // 奇数位置之和 偶数位置之和
  // let l = 0
  // let r = 0
  // for (let i = 0; i < nums.length; i++) {
  //   if (i % 2 === 0) {
  //     r += nums[i]
  //   } else {
  //     l += nums[i]
  //   }
  // }

  // return Math.max(l, r)

  // ?动规五部曲
  let dp = new Array(nums.length)
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
  }

  return dp[nums.length - 1]
};