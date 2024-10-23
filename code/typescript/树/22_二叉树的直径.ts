// https://leetcode.cn/problems/diameter-of-binary-tree/description/

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

function diameterOfBinaryTree(root: TreeNode | null): number {
  // 递归
  // 1. 确定递归函数的参数和返回值：参数为当前节点，返回值为当前节点的最大直径
  // 2. 确定终止条件：当前节点为空，返回0
  // 3. 确定单层递归的逻辑：
  // 3.1 求出左子树的最大直径
  // 3.2 求出右子树的最大直径
  // 3.3 求出当前节点的最大直径
  // 3.4 返回左子树和右子树的最大直径的较大值
  // 4. 求出每个节点的最大直径，取最大值
  let maxDiameter = 0;
  function getMaxDiameter(node: TreeNode | null): number {
    if (!node) return 0;
    const leftMaxDiameter = getMaxDiameter(node.left);
    const rightMaxDiameter = getMaxDiameter(node.right);
    maxDiameter = Math.max(maxDiameter, leftMaxDiameter + rightMaxDiameter);
    return Math.max(leftMaxDiameter, rightMaxDiameter) + 1;
  }
  getMaxDiameter(root);
  return maxDiameter;
}

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);
console.log(diameterOfBinaryTree(root));

export {};
