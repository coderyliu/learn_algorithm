// 给定一个二叉树的根节点 root，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的路径的数目。
// 路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

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

function pathSum(root: TreeNode | null, targetSum: number): number {
  // 方法：暴力 - 遍历每个节点，以每个节点为起点，计算路径和等于 targetSum 的路径数目
  // * 时间复杂度：O(N^2)
  // * 空间复杂度：O(N)
  let count: number = 0;
  const dfs = (node: TreeNode | null, sum: number) => {
    if (!node) return;
    sum += node.val;
    if (sum === targetSum) count++;
    dfs(node.left, sum);
    dfs(node.right, sum);
  };

  // 遍历每个节点
  const preOrderTraversal = (node: TreeNode) => {
    if (!node) return;
    dfs(node, 0);
    node.left && preOrderTraversal(node.left);
    node.right && preOrderTraversal(node.right);
  };
  if (!root) return 0;
  preOrderTraversal(root);
  return count;
}

export {};
