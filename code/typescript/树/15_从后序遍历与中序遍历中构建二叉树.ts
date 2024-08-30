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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  const n = inorder.length;
  const index = new Map();
  for (let i = 0; i < n; i++) {
    index.set(inorder[i], i);
  }

  function dfs(inL, inR, postL, postR) {
    if (postL === postR) {
      // 空节点
      return null;
    }
    const leftSize = index.get(postorder[postR - 1]) - inL; // 左子树的大小
    const left = dfs(inL, inL + leftSize, postL, postL + leftSize);
    const right = dfs(inL + leftSize + 1, inR, postL + leftSize, postR - 1);
    return new TreeNode(postorder[postR - 1], left, right);
  }
  return dfs(0, n, 0, n); // 左闭右开区间
}

export {};
