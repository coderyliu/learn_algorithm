/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const postOrder = (root, p, q) => {
    if (!root || p === root || q === root) {
      return root
    }
    let left = postOrder(root.left, p, q)
    let right = postOrder(root.right, p, q)
    if (left && right) {
      return root
    }
    if (!left) {
      return right
    }
    return left
  }
  return postOrder(root, p, q)
};