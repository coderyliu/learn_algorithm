// https://leetcode.cn/problems/6eUYwP/
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
 * @param {number} targetSum
 * @return {number}
 */
// ?dfs深度优先遍历
var pathSum = function (root, targetSum) {
  // todo dfs求和路径
  const dfs = (node, total) => {
    if (!node) return
    if (total === targetSum) ans++

    if (node.left) dfs(node.left, total + node.left.val)

    if (node.right) dfs(node.right, total + node.right.val)
  }

  // todo 先先序遍历
  const bst = (node) => {
    if (!node) return
    bst(node.left)
    bst(node.right)
    dfs(node, node.val)
  }

  let ans = 0
  if (!root) return []
  bst(root)

  return ans
};