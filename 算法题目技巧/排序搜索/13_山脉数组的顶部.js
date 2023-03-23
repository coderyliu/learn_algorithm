// https://leetcode.cn/problems/B1IidL/

/**
 * @param {number[]} arr
 * @return {number}
 */
// ?一行代码，求最大值 有点投机取巧
var peakIndexInMountainArray = function (arr) {
  return arr.indexOf(Math.max(...arr))
};

// ?二分，存在一个值使得同时比左边大，也比右边大
var peakIndexInMountainArray = function (arr) {
  let left = 0
  let right = arr.length - 1
  let ans = 0
  while (left < right) {
    let mid = Math.floor((right - left) / 2) + left

    if (arr[mid] > arr[mid + 1]) {
      ans = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return ans
};