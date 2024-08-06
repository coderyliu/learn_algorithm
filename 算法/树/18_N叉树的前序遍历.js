// https://leetcode.cn/problems/n-ary-tree-preorder-traversal/
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
// ? 深度优先遍历 --- 递归
var preorder = function (root) {
  const res = []
  const dfs = (root) => {
    if (!root) return

    res.push(root.val)
    if (root.children) {
      root.children.forEach((node) => {
        dfs(node)
      })
    }
  }

  dfs(root)

  return res
};