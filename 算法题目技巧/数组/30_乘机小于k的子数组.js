// https://leetcode.cn/problems/ZVAVXX/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// ?思路：求出所有子数组，判断,题目要求是连续子数组，这样的做法是所有子数组
var numSubarrayProductLessThanK = function (nums, k) {

  const path = []
  const res = []

  function backTracking(startIndex) {
    res.push([...path])
    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i])
      backTracking(i + 1)
      path.pop()
    }
  }

  backTracking(0)

  let count = 0
  for (const arr of res) {
    if (arr.reduce((pre, cur) => pre * cur, 1) < k) {
      if (nums.join('').includes(arr.join('')) && arr.length > 0) {
        count++
      }
    }
  }

  return count
};

// ?思路二：暴力破解 超时
var numSubarrayProductLessThanK = function (nums, k) {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < k) {
      count++
    } else {
      break
    }
    for (let j = i + 1; j < nums.length; j++) {
      if (nums.slice(i, j + 1).reduce((pre, cur) => pre * cur, 1) < k) {
        count++
      } else {
        break
      }

    }
  }

  return count
}

// ?思路三 滑动窗口
var numSubarrayProductLessThanK = function (nums, k) {
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    let sum = 1
    for (let j = i; j >= 0; i--) {
      sum *= nums[j]
      if (sum < k) count++
    }
  }

  return count
}
numSubarrayProductLessThanK([10, 5, 2, 6], 100)
numSubarrayProductLessThanK([1, 2, 3], 0)