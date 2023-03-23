// https://leetcode.cn/problems/PLYXKQ/

/**
 * @param {string[]} matrix
 * @return {number}
 */
// ? 动态规划
var maximalRectangle = function (matrix) {
  let m = matrix.length
  let n = matrix[0].length

  if (m === 0) return 0

  const dp = new Array(m).fill(0).map(i => new Array(n).fill(0))
  matrix = matrix.map(str => str.split(''))
  let ans = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == 1) {
        dp[i][j] = (dp[i][j - 1] || 0) + 1

        let k = i
        let min = dp[i][j]
        while (k >= 0 && dp[k][j]) {
          min = Math.min(min, dp[k][j])
          ans = Math.max(ans, min * (i - k + 1))
          k--
        }
      }
    }
  }

  // console.log(dp)
  return ans
};

console.log(maximalRectangle(["10100", "10111", "11111", "10010"]))