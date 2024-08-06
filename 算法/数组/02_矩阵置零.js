/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let res = []
  for (let i = 0; i < matrix.length; i++) {
    // 优化地方减少循环次数
    if (matrix[i].indexOf(0) !== -1) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[i][j] === 0) {
          res.push([i, j])
        }
      }
    }
  }
  for (const item of res) {
    let j = item[1]
    let i = item[0]
    for (let m = 0; m < matrix.length; m++) {
      matrix[m][j] = 0
    }
    for (let n = 0; n < matrix[0].length; n++) {
      matrix[i][n] = 0
    }
  }

};