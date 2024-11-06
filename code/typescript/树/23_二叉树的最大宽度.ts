// https://leetcode.cn/problems/maximum-width-of-binary-tree/description/

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

function widthOfBinaryTree(root: TreeNode | null): number {
  // BFS - 记录每个节点在满二叉树中的位置
  // 满二叉树中，节点 i 的左子节点为 2i，右子节点为 2i + 1
  if (!root) return 0;
  // 从根结点开始，根结点的位置记为 1
  const queue: [TreeNode, bigint][] = [[root, 1n]];
  let maxWidth = 0;
  while (queue.length) {
    const size = queue.length;
    maxWidth = Math.max(
      maxWidth,
      Number(queue[queue.length - 1][1] - queue[0][1] + 1n)
    );
    for (let i = 0; i < size; i++) {
      const [node, index] = queue.shift()!;
      if (node.left) queue.push([node.left, index * 2n]);
      if (node.right) queue.push([node.right, index * 2n + 1n]);
    }
  }
  return maxWidth;
}

const root = new TreeNode(
  1,
  new TreeNode(3, new TreeNode(5), new TreeNode(3)),
  new TreeNode(2, null, new TreeNode(9))
);
console.log(widthOfBinaryTree(root));

export {};
