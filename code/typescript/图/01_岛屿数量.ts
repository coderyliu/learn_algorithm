// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
// 此外，你可以假设该网格的四条边均被水包围。

function numIslands(grid: string[][]): number {
  const r = grid.length;
  const l = grid[0].length;
  let num = 0;

  // 深度优先遍历
  const dfs = (i: number, j: number) => {
    // base case
    if (
      i < 0 ||
      j < 0 ||
      i >= r ||
      j >= l ||
      grid[i][j] === "0" ||
      grid[i][j] === "2"
    )
      return;

    // 标记已经遍历过的节点
    grid[i][j] = "2";

    // 遍历四个方向
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i + 1, j);
    dfs(i, j - 1);
  };

  // 遍历
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < l; j++) {
      if (grid[i][j] === "1") {
        dfs(i, j);
        num++;
      }
    }
  }

  return num;
}

export {};
