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

function goodNodes(root: TreeNode | null): number {
  // DFS - 深度优先遍历
  let count = 0;
  const path: number[] = [];
  const preOrderTraversal = (node: TreeNode) => {
    path.push(node.val);
    if (path.every((val) => val <= node.val)) count++;
    if (node.left) preOrderTraversal(node.left);
    if (node.right) preOrderTraversal(node.right);
    path.pop();
  };

  if (!root) return count;
  preOrderTraversal(root);

  return count;
}

export {};
