// https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const queue = [
    [root, 0]
  ]
  const res = []

  while (queue.length) {
    const [node, level] = queue.shift()
    if (!res[level]) {
      res[level] = [node.val]
    } else {
      res[level].push(node.val)
    }

    if (node.left) {
      queue.push([node.left, level + 1])
    }

    if (node.right) {
      queue.push([node.right, level + 1])
    }
  }

  for (let i = 0; i < res.length; i++) {
    if (i % 2 !== 0) {
      res[i].reverse()
    }
  }
  return res
};