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

// 给定一个二叉树的根节点 root 和一个目标值 target，请返回所有从根节点到叶子节点的路径，使得每条路径上节点值的和等于 target。
// 示例 1
// 输入: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], target = 22
// 输出: [[5,4,11,2],[5,8,4,5]]

function pathTarget(root: TreeNode | null, target: number): number[][] {
  const res: number[][] = [];
  const path: number[] = [];
  if (!root) return res;
  const inOrderTraversal = (node: TreeNode, target: number) => {
    if (!node.left && !node.right && target === 0) {
      res.push([...path, node.val]);
      return;
    }
    path.push(node.val);
    if (node.left) inOrderTraversal(node.left, target - node.left.val);
    if (node.right) inOrderTraversal(node.right, target - node.right.val);
    path.pop();
  };
  inOrderTraversal(root, target - root.val);
  return res;
}

export {};
