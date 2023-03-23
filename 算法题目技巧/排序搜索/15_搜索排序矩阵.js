// https://leetcode.cn/problems/search-a-2d-matrix/?plan=leetcode_75&plan_progress=gty1ops

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// ?1.暴力
var searchMatrix = function (matrix, target) {
  for (const item of matrix) {
    if (item.includes(target)) return true
  }

  return false
};

// ?2.扁平化+暴力
var searchMatrix = function (matrix, target) {
  let arrTemp = []
  for (const item of matrix) {
    arrTemp = arrTemp.concat(item)
  }

  return arrTemp.indexOf(target) !== -1
}

// ?3.二分查找
var searchMatrix = function (matrix, target) {
  let m = matrix.length,
    n = matrix[0].length

  let low = 0,
    high = m * n - 1
  while (low <=high) {
    let mid = Math.floor((high - low) / 2) + low
    let v = matrix[Math.floor(mid / n)][mid % n]

    if (v > target) {
      high = mid - 1
    } else if (v < target) {
      low = mid + 1
    } else {
      return true
    }
  }

  return false
}