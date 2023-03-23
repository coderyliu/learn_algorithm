// https://leetcode.cn/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const path = []
  const res = []

  function backTracking(used) {
    if (path.length === nums.length) {
      res.push([...path])
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue
      used[i] = true
      path.push(nums[i])
      backTracking(used)
      used[i] = false
      path.pop()
    }
  }

  backTracking([])
  return res

};