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

function invertTree(root: TreeNode | null): TreeNode | null {
  // 二叉树的前序遍历 - DFS
  if (!root) return root;
  const preOrderTraversal = (node: TreeNode | null) => {
    if (!node) return null;
    const temp = node!.left;
    node!.left = node!.right;
    node!.right = temp;
    preOrderTraversal(node!.left);
    preOrderTraversal(node!.right);
  };
  preOrderTraversal(root);
  return root;
}

export {};
