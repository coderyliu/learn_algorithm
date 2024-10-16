// https://leetcode.cn/problems/path-sum-ii/description/

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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  if (root === null) return [];
  const res: number[][] = [];
  const path: number[] = [];

  const dfs = (node: TreeNode, targetSum: number) => {
    if (node.left === null && node.right === null && targetSum === 0) {
      res.push([...path, node.val]);
    }

    path.push(node.val);
    if (node.left) dfs(node.left, targetSum - node.left.val);
    if (node.right) dfs(node.right, targetSum - node.right.val);
    path.pop();
  };

  dfs(root, targetSum - root.val);
  return res;
}

export {};
