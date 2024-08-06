// https://leetcode.cn/problems/same-tree/?plan=leetcode_75&plan_progress=gty1ops

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // ?dfs
  const dfs = (p, q) => {
    if (!p && !q) return true
    if (!p || !q) return false

    return p.val === q.val && dfs(p.left, q.left) && dfs(p.right, q.right)
  }

  dfs(p, q)
};