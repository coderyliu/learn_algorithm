// https://leetcode.cn/problems/pascals-triangle/
// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。在「杨辉三角」中，每个数是它左上方和右上方的数的和。

function generate(numRows: number): number[][] {
  // 方法：数学
  const res: number[][] = [];
  for (let i = 0; i < numRows; i++) {
    const row = Array(i + 1).fill(1);
    for (let j = 1; j < row.length - 1; j++) {
      row[j] = res[i - 1][j] + res[i - 1][j - 1];
    }

    res.push(row);
  }

  return res;
}

console.log(generate(5));
console.log(generate(1));

export {};
