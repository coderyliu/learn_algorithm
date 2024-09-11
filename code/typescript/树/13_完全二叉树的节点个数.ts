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

function countNodes(root: TreeNode | null): number {
  const res: number[] = [];
  // 递归（前序、中序、后序）、层序
  const inOrderTraversal = (node: TreeNode | null) => {
    if (!node) return;
    inOrderTraversal(node.left);
    res.push(node.val);
    inOrderTraversal(node.right);
  };
  inOrderTraversal(root);
  return res.length;
}

export {};
