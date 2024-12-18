// https://leetcode.cn/problems/triangle/solutions/2269227/typescript-by-user6954-m2h4/

function minimumTotal(triangle: number[][]): number {
  // 迭代：从下往上
  // *时间复杂度：O(n^2)
  // *空间复杂度：O(1)
  const len = triangle.length;
  for (let i = len - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }
  return triangle[0][0];
}

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));

export {};
