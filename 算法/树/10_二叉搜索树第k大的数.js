/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  const result = []
  const inOrder = (node, result) => {
    if (!node) return result
    inOrder(node.left, result)
    result.push(node.val)
    inOrder(node.right, result)
  }
  inOrder(root, result)
  return result[result.length - k]
};