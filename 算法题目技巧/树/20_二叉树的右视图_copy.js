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
var rightSideView = function (root) {
  // ?BFS
  let queue = [
    [root, 0]
  ]
  let res = []
  let ret = []

  while (queue.length) {
    let [node, level] = queue.shift()
    if (!res[level]) {
      res[level] = []
      res[level].push(node.val)
    } else {
      res[level].push(node.val)
    }

    if (node.left) queue.push([node.left, level + 1])
    if (node.right) queue.push([node.right, level + 1])
  }

  for (const item of res) {
    ret.push(item.pop())
  }

  return ret
};