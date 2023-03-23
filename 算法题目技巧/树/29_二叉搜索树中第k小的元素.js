// https://leetcode.cn/problems/kth-smallest-element-in-a-bst/?plan=leetcode_75&plan_progress=gty1ops

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  // 中序遍历
  let res = []
  const dfs = (root) => {
    if (!root) return

    dfs(root.left)
    res.push(root.val)
    dfs(root.right)
  }

  dfs(root)

  return res[k - 1]
};