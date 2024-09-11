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
  if (root === null) return null;
  // 前序遍历
  const dfs = (node: TreeNode | null) => {
    if (node === null) return;
    // 交换节点
    const temp = node.left;
    node.left = node.right;
    node.right = temp;

    dfs(node.left);
    dfs(node.right);
  };

  dfs(root);
  return root;
}

export {};
