/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  // 这道题的原理是尽量分成两推重量相等石头块，这样碰撞之后最后的重量最小
  // weight[i],value[i]都相当于01背包当中的石头的重量和价值
  // target=sum/2,相当于背包的size

  const sum = stones.reduce((pre, cur) => {
    return pre + cur
  }, 0)

  const target = Math.floor(sum / 2)

  const dp = Array(stones.length + 1).fill(0).map(i => Array(target + 1).fill(0))

  for (let i = 1; i <= stones.length; i++) {
    for (let j = 0; j <= target; j++) {
      if (stones[i - 1] <= j) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - stones[i - 1]] + stones[i - 1])
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
  }

  // return dp
  return sum - dp[stones.length][target] - dp[stones.length][target]
};
console.log(lastStoneWeightII([2, 7, 4, 1, 8, 1]))