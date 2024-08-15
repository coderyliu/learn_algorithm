/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  // 方法：递归（前序遍历）
  if (!root) return false;
  let res = false;
  const preOrderTraversal = (node: TreeNode, v: number) => {
    // 在叶子节点处，判断当前路径的节点值的和是否等于目标值
    if (!node.left && !node.right && v == targetSum) {
      res = true;
    }
    if (node.left) preOrderTraversal(node.left, v + node.left.val);
    if (node.right) preOrderTraversal(node.right, v + node.right.val);
  };

  preOrderTraversal(root, root.val);
  return res;
}

export {};
