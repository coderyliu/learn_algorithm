// https://leetcode-cn.com/problems/jump-game-ii/

function jump(nums) {
  let steps = 0
  let curIndex = 0
  let nextIndex = 0
  for (let i = 0; i < nums.length; i++) {
    nextIndex = Math.max(nums[i] + i, nextIndex)
    if (i === curIndex) {
      curIndex = nextIndex
      steps++
    }
  }

  return steps
}