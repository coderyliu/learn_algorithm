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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  const dfs = (
    preOrder: number[],
    map,
    i: number,
    l: number,
    r: number
  ): TreeNode | null => {
    if (r - l < 0) return null;
    // 构建根节点
    const root = new TreeNode(preOrder[i]);
    // 查询 m 的索引，构建左子树、右子树
    const m = map.get(preOrder[i]);
    // 递归构建左子树和右子树
    root.left = dfs(preOrder, map, i + 1, l, m - 1);
    root.right = dfs(preOrder, map, i + 1 + m - l, m + 1, r);
    return root;
  };

  const root = dfs(preorder, map, 0, 0, inorder.length - 1);
  return root;
}

export {};
