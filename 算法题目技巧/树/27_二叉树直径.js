// https://leetcode.cn/problems/diameter-of-binary-tree/solution/dai-ma-jian-ji-de-jie-fa-jsban-ben-by-it-3o1r/

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
 * @return {number}
 */
// ?求二叉树左右子树的最大深度
var diameterOfBinaryTree = function (root) {
  const dfs = (node) => {
    if (!node) return 0

    const left = dfs(node.left)
    const right = dfs(node.right)
    res = Math.max(res, left + right)

    return 1 + Math.max(left, right)
  }
  let res = 0
  dfs(root)
  return res
};