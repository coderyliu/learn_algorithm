class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(
    val: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root) return root;
  // 如果p、q都在root的左子树，则递归左子树
  if (root.val > p!.val && root.val > q!.val) {
    return lowestCommonAncestor(root.left, p, q);
  }

  // 如果p、q都在root的右子树，则递归右子树
  if (root.val < p!.val && root.val < q!.val) {
    return lowestCommonAncestor(root.right, p, q);
  }

  return root;
}

export {};
