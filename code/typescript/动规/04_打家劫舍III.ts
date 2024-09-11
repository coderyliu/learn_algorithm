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

function rob(root: TreeNode | null): number {
  // 后序遍历 - DFS - O(2^n)
  if (root == null) return 0;
  // money 为 爷爷的钱（4 个孙子的钱 + 爷爷的钱）
  let money = root.val;
  // 加上孙子的钱
  if (root.left != null) money += rob(root.left.left) + rob(root.left.right);
  // 加上孙子的钱
  if (root.right != null) money += rob(root.right.left) + rob(root.right.right);

  // rob(root.left) + rob(root.right) 为两个儿子的钱
  return Math.max(money, rob(root.left) + rob(root.right));
}

export {};
