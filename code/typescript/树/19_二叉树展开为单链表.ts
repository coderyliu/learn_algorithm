// https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/description/

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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  if (root === null) return;
  // 1. 先序遍历拿到所有节点
  const res: TreeNode[] = [];
  const preOrder = (node: TreeNode) => {
    if (node === null) return;
    res.push(node);
    if (node.left) preOrder(node.left);
    if (node.right) preOrder(node.right);
  };

  preOrder(root);
  // 2. 修改节点
  for (let i = 0; i < res.length; i++) {
    res[i].left = null;
    res[i].right = res[i + 1] || null;
  }
}

export {};
