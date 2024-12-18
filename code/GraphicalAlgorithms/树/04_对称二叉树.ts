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

function isSymmetric(root: TreeNode | null): boolean {
  // 前序遍历 - DFS
  if (!root) return true;
  const isSymmetricTree = (left: TreeNode | null, right: TreeNode | null) => {
    if (!left && !right) return true;
    if (!left || !right) return false;
    return (
      left.val === right.val &&
      isSymmetricTree(left.left, right.right) &&
      isSymmetricTree(left.right, right.left)
    );
  };
  return isSymmetricTree(root.left, root.right);
}

export {};
