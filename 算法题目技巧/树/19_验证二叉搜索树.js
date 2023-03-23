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
// ? 递归
var isValidBST = function (root) {
  return checkBinaryTree(root, -Infinity, Infinity)
};

var checkBinaryTree = function (root, lower, upper) {
  if (!root) return true
  if (root.val <= lower || root.val >= upper) return false


  return checkBinaryTree(root.left, lower, root.val) && checkBinaryTree(root.right, root.val.upper)
}