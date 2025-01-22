// 给你一个下标从 0 开始、大小为 n x n 的整数矩阵 grid ，返回满足 Ri 行和 Cj 列相等的行列对 (Ri, Cj) 的数目。
// 如果行和列以相同的顺序包含相同的元素（即相等的数组），则认为二者是相等的

function equalPairs(grid: number[][]): number {
  // 方法一：暴力
  // * 时间复杂度：O(n^2)
  // * 空间复杂度：O(n)
  const n = grid.length;
  const rowArr: string[] = [];
  const colArr: string[] = [];
  // 将行和列转换为字符串
  for (let i = 0; i < n; i++) {
    rowArr.push(grid[i].join(","));
    colArr.push(grid.map((row) => row[i]).join(","));
  }

  // 遍历行和列，统计相等的对数
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (rowArr[i] === colArr[j]) {
        count++;
      }
    }
  }

  return count;
}

console.log(
  equalPairs([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7]
  ])
); // 1
console.log(
  equalPairs([
    [3, 1, 2, 2],
    [1, 4, 4, 5],
    [2, 4, 2, 2],
    [2, 4, 2, 2]
  ])
); // 3

export {};
