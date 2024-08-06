// https://leetcode.cn/problems/WNC0Lk/

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
 * @return {number[]}
 */
// ? 层序遍历
var rightSideView = function (root) {
  if (!root) return []
  const queue = [
    [root, 0]
  ]
  const res = []

  while (queue.length) {
    const [node, level] = queue.shift()

    if (res[level]) {
      res[level].push(node.val)
    } else {
      res[level] = []
      res[level].push(node.val)
    }

    if (node.left) queue.push([node.left, level + 1])
    if (node.right) queue.push([node.right, level + 1])
  }

  const result = []
  for (const item of res) {
    result.push(item.pop())
  }

  return result
};