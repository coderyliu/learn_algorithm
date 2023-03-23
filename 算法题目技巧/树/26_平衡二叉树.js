// https://leetcode.cn/problems/balanced-binary-tree/solution/js-ping-heng-er-cha-shu-by-bertil-w00v/

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
 * @return {boolean}
 */
// ?1.判断左子树是否是平衡二叉树
// ?2.判断右子树是否是平衡二叉树
// ?3.判断left-right<=-1
var isBalanced = function (root) {
  const dfs = (root) => {
    if (!root) return 0
    const left = dfs(root.left)
    if (left === -1) return -1

    const right = dfs(root.right)
    if (right === -1) return -1

    return Math.abs(left - right) <= 1 ? Math.max(left, right) + 1 : -1
  }

  return dfs(root) !== -1
}