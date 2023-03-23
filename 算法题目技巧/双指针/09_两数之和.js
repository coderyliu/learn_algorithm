// https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// ?暴力解法,双层for循环
var twoSum = function (numbers, target) {
  // todo 时间复杂度O(n^2)
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1]
      }
    }
  }
};

// ?2.双指针
var twoSum = function (numbers, target) {
  // todo 时间复杂度小于O(n^2)
  let left = 0
  let right = numbers.length - 1
  while (left < right) {
    let sum = numbers[left] + numbers[right]
    if (sum > target) {
      right--
    } else if (sum < target) {
      left++
    }
    if (sum === target) {
      return [left + 1, right + 1]
    }
  }
}