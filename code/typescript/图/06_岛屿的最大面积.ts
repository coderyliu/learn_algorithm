// https://leetcode.cn/problems/max-area-of-island/description/

function maxAreaOfIsland(grid: number[][]): number {
  // DFS - 递归
  const r = grid.length;
  const l = grid[0].length;
  let area: number = 0; // 岛屿面积
  let res: number = 0; // 最大面积
  // 深度优先搜索
  const dfs = (i: number, j: number) => {
    // base case
    if (
      i < 0 ||
      j < 0 ||
      i >= r ||
      j >= l ||
      grid[i][j] === 0 ||
      grid[i][j] === 2
    )
      return;
    // 标记已经遍历过的节点
    grid[i][j] = 2;
    // 面积 +1
    area++;
    // 遍历四个方向
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i + 1, j);
    dfs(i, j - 1);
  };

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < l; j++) {
      // 遍历所有陆地
      if (grid[i][j] === 1) {
        area = 0;
        dfs(i, j);
        res = Math.max(res, area);
      }
    }
  }

  return res;
}

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
  ])
);

export {};
