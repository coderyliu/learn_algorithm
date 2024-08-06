// https://leetcode.cn/problems/where-will-the-ball-fall/
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
// ?深度优先遍历
var findBall = function (grid) {
  const m = grid.length
  const n = grid[0].length

  function dfs(x, y) {
    if (x >= m) return y

    // 右
    if (grid[x][y] === 1) {
      // 卡住在边界，或者形成v挡板
      if (y + 1 >= n || grid[x][y + 1] === -1) {
        return -1
      }

      return dfs(x + 1, y + 1)
    }

    // 左
    if (grid[x][y] === -1) {
      // 卡住在边界，或者形成v挡板
      if (y - 1 < 0 || grid[x][y - 1] === 1) {
        return -1
      }

      return dfs(x + 1, y - 1)
    }
  }

  let ans = []
  for (let i = 0; i < n; i++) {
    ans.push(dfs(0, i))
  }

  return ans
};