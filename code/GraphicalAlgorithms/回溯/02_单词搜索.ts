// 字母迷宫游戏初始界面记作 m x n 二维字符串数组 grid，请判断玩家是否能在 grid 中找到目标单词 target。
// 注意：寻找单词时 必须 按照字母顺序，通过水平或垂直方向相邻的单元格内的字母构成，同时，同一个单元格内的字母 不允许被重复使用 。

// 示例
// grid = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], target = "ABCCED"
// 输出：true

function wordPuzzle(grid: string[][], target: string): boolean {
  // *图 - DFS深度优先遍历
  const r = grid.length;
  const l = grid[0].length;

  const dfs = (i: number, j: number, idx: number): boolean => {
    // base case
    if (i < 0 || j < 0 || i >= r || j >= l || grid[i][j] !== target[idx])
      return false;

    // 递归结束条件
    if (!target[idx + 1]) return true;

    // 遍历过的单词
    grid[i][j] = "";

    // 递归
    const bool =
      dfs(i - 1, j, idx + 1) ||
      dfs(i, j + 1, idx + 1) ||
      dfs(i + 1, j, idx + 1) ||
      dfs(i, j - 1, idx + 1);

    // 回溯
    if (!bool) grid[i][j] = target[idx];
    return bool;
  };

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < l; j++) {
      const bool = dfs(i, j, 0);
      if (bool) return true;
    }
  }
  return false;
}

export {};
