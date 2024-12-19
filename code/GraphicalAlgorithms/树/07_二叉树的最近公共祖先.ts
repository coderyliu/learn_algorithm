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
  // DFS - 后序遍历
  if (!root) return root;
  // 寻找 p、q，找到则立刻返回告诉上层节点，找到了
  if (root === p || root === q) return root;
  // 自顶向下检查p、q能否在左右子树中找到
  const leftNode = lowestCommonAncestor(root.left, p, q);
  const rightNode = lowestCommonAncestor(root.right, p, q);

  // 自底向上，返回公共祖先
  // p,q在左右子树中都找到了，则当前节点就是公共祖先
  if (leftNode && rightNode) return root;
  // p,q没有在左右子树中找到，则返回null
  if (!leftNode && !rightNode) return null;
  // 如果只找到一个，则返回找到的那个节点
  return leftNode || rightNode;
}

export {};
