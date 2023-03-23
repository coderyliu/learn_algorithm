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
 * @return {TreeNode}
 */
// ?前序遍历
var invertTree = function (root) {
  const dfs = (node) => {
    if (!node) return

    const tmp = node.left
    node.left = node.right
    node.right = tmp

    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)

  return root
};