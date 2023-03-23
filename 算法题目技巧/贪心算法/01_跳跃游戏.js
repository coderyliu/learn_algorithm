// https://leetcode-cn.com/problems/jump-game/

// 这个题目，不在于明确每次挑几步，而在于明确每次的跳跃是否可以覆盖到最后
// 局部最优就是看最大跳跃步数是否可以覆盖到全局
// 全局最优就是是否可以跳到最后

function canJump(nums) {
  if (nums.length === 1) return true
  let cover = 0
  for (let i = 0; i <= cover; i++) {
    cover = Math.max(cover, nums[i] + i)
    if (cover >= nums.length - 1) {
      return true
    }
  }

  return false
}