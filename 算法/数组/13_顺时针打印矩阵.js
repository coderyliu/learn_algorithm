// https: //leetcode.cn/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return []
  let startX = 0
  let startY = 0
  let offset = 1
  let m = matrix[0].length
  let n = matrix.length
  let loop = Math.ceil(matrix.length / 2)
  if (matrix.length === 1) {
    return matrix[0]
  } else if (matrix[0].length === 1) {
    return [].concat(...matrix)
  }
  let mid = Math.floor(matrix.length / 2)
  const res = []
  while (loop--) {
    let raw = startX
    let col = startY
    // 上侧，从左到右打印，左闭右开
    for (col; col < startY + m - offset; col++) {
      res.push(matrix[raw][col])
    }

    // 右侧，从上到下
    for (raw; raw < n + startX - offset; raw++) {
      res.push(matrix[raw][col])
    }

    // 下边 从右到左
    for (col; col > startY; col--) {
      res.push(matrix[raw][col])
    }

    // 左侧，从下到上
    for (raw; raw > startX; raw--) {
      res.push(matrix[raw][col])
    }

    startX++
    startY++

    offset += 2
  }

  if (n % 2 === 1 && m % 2 === 1) {
    res.push(matrix[mid][mid])
  }

  const len = m * n
  while (res.length > len) {
    res.pop()
  }

  return res
};
console.log(spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]))