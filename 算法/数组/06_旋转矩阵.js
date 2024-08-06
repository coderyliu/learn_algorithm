/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // 先沿着主对角线旋转
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = matrix[j][i]
      matrix[j][i] = matrix[i][j]
      matrix[i][j] = temp
    }
  }

  // 再沿着对称轴旋转
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < Math.floor(matrix.length / 2); j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[i][matrix.length - j - 1]
      matrix[i][matrix.length - j - 1] = temp
    }
  }

  return matrix
};