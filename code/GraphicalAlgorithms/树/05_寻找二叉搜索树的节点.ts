// 二叉搜索树的第k大节点

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

function searchBST(root: TreeNode | null, cnt: number): number {
  // 中序遍历 - DFS
  if (!root) return -1;
  const res: number[] = [];
  const inOrderTraversal = (node: TreeNode | null) => {
    if (!node) return;
    inOrderTraversal(node.left);
    res.push(node.val);
    inOrderTraversal(node.right);
  };
  inOrderTraversal(root);
  return res[res.length - cnt];
}

export {};
