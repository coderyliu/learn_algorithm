// https://leetcode.cn/problems/search-a-2d-matrix-ii/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 1.暴力解法---竟然没有超时
// todo 时间复杂度O(n^2) 8s多
var searchMatrix = function (matrix, target) {
  let m = matrix.length
  let n = matrix[0].length
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] > target) {
      return false
    }
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] > target) {
        break
      }
      if (matrix[i][j] === target) {
        return true
      }
    }
  }
  return false
};

// ?2.如果我们从数组第一个位置搜索，如果比target大它永远有两个方向可以前进
//?如果我们从最后一行的第一个位置开始搜索，那么它只有一个方向可以走
// todo 这样的写法时间快了3s
var searchMatrix = function (matrix, target) {
  const m = matrix.length - 1
  const n = matrix[0].length
  if (target < matrix[0][0]) {
    return false
  }
  for (let i = m; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] > target) {
        break
      } else if (matrix[i][j] < target) {
        continue
      } else {
        return true
      }
    }
  }

  return false
};

// ?3.思路和上面的一样
// todo 时间复杂度O(m+n) 只有300ms
var searchMatrix = function (matrix, target) {
  if (target < matrix[0][0]) {
    return false
  }

  let row = matrix.length - 1
  let col = 0
  while (col < matrix[0].length && row >= 0) {
    if (matrix[row][col] > target) {
      row--
    } else if (matrix[row][col] < target) {
      col++
    } else {
      return true
    }
  }

  return false
};