// https://leetcode.cn/problems/container-with-most-water/
/**
 * @param {number[]} height
 * @return {number}
 */
// 1.暴力解法,超时,通过用例55
var maxArea = function (height) {
  let res = 0
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const maxHeight = Math.min(height[j], height[i])
      const sum = maxHeight * (j - i)
      res = Math.max(sum, res)
    }
  }

  return res
};

// 2.双指针,60ms
var maxArea = function (height) {
  let left = 0
  let right = height.length - 1
  let res = 0

  while (left < right) {
    let maxHeight = Math.min(height[left], height[right])
    let sum = maxHeight * (right - left)
    res = Math.max(res, sum)
    height[right] < height[left] ? right-- : left++
  }

  return res
};