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

function sumNumbers(root: TreeNode | null): number {
  if (!root) return 0;
  const res: string[] = [];
  // 前序遍历
  const preOrderTraversal = (node: TreeNode, v: string) => {
    if (!node.left && !node.right) {
      res.push(v);
      return;
    }

    if (node.left) preOrderTraversal(node.left, v + node.left.val);
    if (node.right) preOrderTraversal(node.right, v + node.right.val);
  };
  preOrderTraversal(root, root.val + "");
  return res.reduce((pre, cur) => Number(cur) + pre, 0);
}

export {};
