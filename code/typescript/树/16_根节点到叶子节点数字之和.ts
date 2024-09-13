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
  let res: number = 0;

  // 前序遍历
  const preOrder = (node: TreeNode, sum: string) => {
    if (!node.left && !node.right) {
      res += Number(sum);
      return;
    }

    if (node.left) preOrder(node.left, sum + node.left.val);
    if (node.right) preOrder(node.right, sum + node.right.val);
  };
  preOrder(root, root.val + "");

  return res;
}

export {};
