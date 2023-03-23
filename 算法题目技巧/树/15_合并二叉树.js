// https: //leetcode.cn/problems/merge-two-binary-trees/

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
// ?先序遍历
var mergeTrees = function (root1, root2) {
  const preOrder = (node1, node2) => {
    if (!node1) {
      return node2
    }

    if (!node2) {
      return node1
    }

    node1.val = node1.val + node2.val
    node1.left = preOrder(node1.left, node2.left)
    node1.right = preOrder(node1.right, node2.right)

    return node1
  }

  return preOrder(root1, root2)
};