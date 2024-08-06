// https://leetcode.cn/problems/D0F0SV/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// todo 回溯超时
var combinationSum4 = function(nums, target) {
  // ?排序
  nums.sort((a,b)=>a-b)
  let count=0
  // ?回溯
  backTracking(0)
  function backTracking(sum){
    if(sum>target)return
    if(sum===target){
      count++
    }
    for(let i=0;i<nums.length;i++){
      const num=nums[i]
      if(target-sum<num){
        break
      }
      sum+=num
      backTracking(sum)
      sum-=num
    }
  }
  console.log(count)
};

// todo 方法二：动态规划
var combinationSum4=function(nums,target){
  nums.sort((a, b) => a - b)
  let dp = new Array(target + 1).fill(0)
  dp[0] = 1
  for(let i = 1; i <= target;i++){
      for(const item of nums){
          if(item <= i){
           dp[i] += dp[i - item]
          }else{
              break
          }
      }
  }
  return dp[target]
}
combinationSum4([1,2,3],4)
combinationSum4([1,2,3],35)