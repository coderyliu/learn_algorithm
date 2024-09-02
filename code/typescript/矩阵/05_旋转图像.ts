/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): number[][] {
  // 方法：暴力（旋转90度）
  // 可以看到: 旋转之后与旋转之前的区别：第一行变为最后一列 ... 最后一行变为第一列
  const m = matrix.length;
  const n = matrix[0].length;
  const res: number[][] = Array(m)
    .fill([])
    .map(() => Array(n));
  let k = n;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res[j][k - 1] = matrix[i][j];
    }
    k--;
  }

  return res;
}

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);

export {};
