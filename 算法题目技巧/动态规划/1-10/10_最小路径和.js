/**
 * @param {number[][]} grid
 * @return {number}
 */
// var minPathSum = function (grid) {
//   let ret = 0
//   let upRets = [0] // 第一行第一列特殊边界处理

//   for (var i = 0; i < grid.length; i++) {
//     for (var j = 0; j < grid[i].length; j++) {
//       let top = isNaN(upRets[j]) ? Number.MAX_SAFE_INTEGER : upRets[j] // 是否为第一行，如果是，则不能由上侧来，只能由左侧
//       let left = isNaN(upRets[j - 1]) ? top : upRets[j - 1] // 是否为第一列，如果是，则不能由左侧来，只能由上侧
//       ret = Math.min(top, left) + grid[i][j]
//       upRets[j] = ret
//     }
//   }
//   return ret

// }
var minPathSum = function (grid) {
  let m = grid.length
  let n = grid[0].length
  if (m === 1 && n == 1) return grid[0][0]
  let dp = Array(m).fill(0).map(i => Array(n).fill(0))
  dp[0][0] = grid[0][0]
  for (let i = 1; i < m; i++) {
    dp[i][0] = grid[i][0] + dp[i - 1][0]
  }

  for (let j = 1; j < n; j++) {
    dp[0][j] = grid[0][j] + dp[0][j - 1]
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    }
  }

  return dp[m - 1][n - 1]
}

console.log(minPathSum([
  [1, 2, 3],
  [4, 5, 6]
]))