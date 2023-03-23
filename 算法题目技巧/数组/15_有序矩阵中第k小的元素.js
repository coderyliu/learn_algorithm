// https://leetcode.cn/problems/kth-smallest-element-in-a-sorted-matrix/
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
// ?1.暴力破解法
// 时间复杂度O(n^2)
var kthSmallest = function (matrix, k) {
  let res = []
  for (let i = 0; i < matrix.length; i++) {
    res.push(...matrix[i])
  }
  res.sort((a, b) => a - b)
  console.log(res[k - 1])
};

// ?2.二分法
var kthSmallest = function (matrix, k) {
  // 经过观察，左上角元素为min,右小角元素为max,获取他们的坐标
  let m = matrix.length
  let n = matrix[0].length
  let low = matrix[0][0]
  let high = matrix[m - 1][n - 1]
  // 由于矩阵中有重复元素，所以包含等号
  while (low <= high) {
    let mid = Math.floor((high - low) / 2) + low
    let count = 0
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n && matrix[i][j] <= mid; j++) {
        // 获取比mid小的元素个数
        count++
      }
    }
    if (count < k) {
      // 结果在右边
      low = mid + 1
    } else {
      // 结果在左边
      high = mid - 1
    }
  }
  return low
}


kthSmallest([
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15]
], 8)
kthSmallest([
  [-5]
], 1)