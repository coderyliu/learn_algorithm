/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let m = matrix.length
  let n = matrix[0].length

  if (m === 1 || n === 1) {
    return [].concat(...matrix)
  }

  let loop = Math.ceil(m / 2)
  let offset = 1
  let startX = 0
  let startY = 0
  let mid = Math.floor(m / 2)
  const res = []

  while (loop) {
    let row = startX
    let col = startY

    for (col; col < n - offset + startY; col++) {
      res.push(matrix[row][col])
    }

    for (row; row < m - offset + startX; row++) {
      res.push(matrix[row][col])
    }

    for (col; col > startY; col--) {
      res.push(matrix[row][col])
    }

    for (row; row > startX; row--) {
      res.push(matrix[row][col])
    }

    loop--
    offset += 2

    startX++
    startY++
  }

  if (m % 2 === 1 && n % 2 === 1) {
    res.push(matrix[mid][mid])
  }

  while(res.length>m*n){
    res.pop()
  }

  return res
};
console.log(spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]))
console.log(spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]))