// https://leetcode.cn/problems/validate-binary-search-tree/description/

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

function isValidBST(root: TreeNode | null): boolean {
  // 递归：1. 左子树是二叉搜索树 2. 右子树是二叉搜索树 3. 左子树的最大值 < 根节点 < 右子树的最小值
  const dfs = (node: TreeNode | null, lower: number, upper: number) => {
    if (!node) return true;
    if (node.val <= lower || node.val >= upper) return false;
    return dfs(node.left, lower, node.val) && dfs(node.right, node.val, upper);
  };
  return dfs(root, -Infinity, Infinity);
}

export {};
