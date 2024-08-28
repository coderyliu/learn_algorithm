/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  // 方法一：暴力
  const r = matrix.length;
  const l = matrix[0].length;
  const zeroes: number[][] = [];
  // 找出所有0的位置
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < l; j++) {
      if (matrix[i][j] === 0) zeroes.push([i, j]);
    }
  }
  // 遍历所有0的位置，将所有0所在的行和列置为0
  for (const [i, j] of zeroes) {
    for (let k = 0; k < r; k++) {
      matrix[k][j] = 0;
    }
    for (let k = 0; k < l; k++) {
      matrix[i][k] = 0;
    }
  }
}

export {};
