// https://leetcode.cn/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const m = grid.length
  const n = grid[0].length
  let res = 0

  // 定义深度优先遍历函数
  const dfs = (i, j) => {
    // 越界，遇到水，就不访问了
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === '0' || grid[i][j] === '2') return

    // 访问标记过的地方标记为2
    grid[i][j] = '2'

    // 四个方向继续访问
    dfs(i + 1, j)
    dfs(i, j + 1)
    dfs(i - 1, j)
    dfs(i, j - 1)
  }

  // 矩阵的行和列
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        dfs(i, j)

        // 每遍历完一趟，会把所有相连的1变成2
        res++
      }
    }
  }

  return res
};