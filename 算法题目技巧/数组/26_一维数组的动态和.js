// https://leetcode.cn/problems/running-sum-of-1d-array/submissions/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  // ?1.确定dp，及其每一项下标的含义
  const dp=new Array(nums.length)
  // ?2.dp初始化
  dp[0]=nums[0]
  // ?3.dp的推导公式
  // todo dp[i]=dp[i-1]+nums[i]
  
  // ?4.dp的遍历顺序 
  for(let i=1;i<nums.length;i++){
    dp[i]=dp[i-1]+nums[i]
  }

  return dp
};