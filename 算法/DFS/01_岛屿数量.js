// https://leetcode.cn/problems/number-of-islands/solution/dao-yu-lei-wen-ti-de-tong-yong-jie-fa-dfs-bian-li-/

// ? DFS 我们可以把岛屿数量的一系列问题看做是DFS，只不过DFS不是树了，而是表格
// todo  依然dfs，四个方向，岛屿遍历过的设置为2，边界条件为不出界
var numIslands = function (grid) {
  const m = grid.length
  const n = grid[0].length
  let res = 0

  // 定义深度优先遍历函数
  const dfs = (i, j) => {
    // 越界，遇到水，则不访问了
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === '0' || grid[i][j] === '2') return

    // ?访问过的地方标记为2
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
        dfs(i, j)
        // 每遍历完一整趟， 会把相连的所有1， 变成2
        // 代表访问完了一个岛屿，res++
        res++
      }
    }
  }
  return res
}