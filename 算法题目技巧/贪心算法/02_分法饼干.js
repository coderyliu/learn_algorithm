// https://leetcode-cn.com/problems/assign-cookies/

// 这道题，就可以用贪心算法
// 局部最优就是把大饼干优先发给胃口大的孩纸，全局最优就是满足更多的孩纸
// 先排序，遍历-->如果满足当前饼干的尺寸大于等于孩纸的胃口，就分给他

var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let res = 0
  let index = s.length - 1
  for (let i = g.length - 1; i >= 0; i--) {
    if (index >= 0 && s[index] >= g[i]) {
      res++
      index--
    }
  }
  return res
};