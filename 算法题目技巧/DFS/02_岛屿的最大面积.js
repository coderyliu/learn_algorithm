// https://leetcode.cn/problems/max-area-of-island

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const m = grid.length
  const n = grid[0].length
  let res = 0
  let area = 0

  // 定义深度优先遍历函数
  const dfs = (i, j) => {
    // 越界，遇到水，则不访问了
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === '0' || grid[i][j] === '2') return

    // ?访问过的地方标记为2
    area++
    grid[i][j] = '2'

    // ?四个方向继续访问
    dfs(i + 1, j)
    dfs(i, j + 1)
    dfs(i - 1, j)
    dfs(i, j - 1)
  }

  // 矩阵的行，列
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // ? 找到矩阵中，为1的地方，开始深度遍历
      if (grid[i][j] === '1') {
        area = 0
        dfs(i, j)
        // 每遍历完一整趟， 会把相连的所有1， 变成2
        // 代表访问完了一个岛屿，res++
        res = Math.max(res, area)
      }
    }
  }
  return res
};