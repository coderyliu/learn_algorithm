// 动规五部曲：
// 1-确定dp数组及其下标的含义
// 一维dp数组 dp[i]表示包括i之前的最长上升子序列

// 2-确定递推公式
// if(nums[i]>nums[j]){dp[i]=Math.max(dp[i],dp[j]+1)}

// 3-dp[i]数组的初始化
// 每一个i对应的dp[i]至少为1

// 4-确定递推的遍历顺序
// 从前向后遍历

function lengthOfLIS(nums) {
  let dp = Array(nums).fill(1)

  let result = 1
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }

    result = Math.max(result, dp[i])
  }

  return result
}