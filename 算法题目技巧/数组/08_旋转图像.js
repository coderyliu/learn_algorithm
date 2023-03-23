/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // 按照对角线旋转
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i+1; j < matrix.length; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }

  // 按照对称轴旋转
  let len = Math.floor(matrix.length / 2)
  let mLen = matrix.length
  for (let i = 0; i < mLen; i++) {
    for (let j = 0; j < len; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[i][mLen - j - 1]
      matrix[i][mLen - j - 1] = temp
    }
  }
};