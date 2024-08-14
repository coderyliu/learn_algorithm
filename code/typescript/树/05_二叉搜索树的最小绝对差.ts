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

function getMinimumDifference(root: TreeNode | null): number {
  // 方法一：中序遍历 + 单层for循环
  const res: number[] = [];
  const inOrderTraversal = (node: TreeNode | null) => {
    if (node === null) return;
    inOrderTraversal(node.left);
    res.push(node.val);
    inOrderTraversal(node.right);
  };
  inOrderTraversal(root);

  let min = Infinity;
  // 双层循环
  // for (let i = 0; i < res.length; i++) {
  //   for (let j = i + 1; j < res.length; j++) {
  //     min = Math.min(min, Math.abs(res[i] - res[j]));
  //   }
  // }

  // 优化 - 单层循环
  for (let i = 1; i < res.length; i++) {
    min = Math.min(min, Math.abs(res[i] - res[i - 1]));
  }

  return min;
}

export {};
