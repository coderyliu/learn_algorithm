// https://ricepudding.cn/article/65e4473a

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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  // ?思路：bfs层序遍历,队列里面会放置二叉树每一层的节点，对队列中每个节点与subRoot判断是否为相同的树
  if (!root) return false;
  const queue: TreeNode[] = [root];
  while (queue.length) {
    const node: TreeNode = queue.shift()!;
    if (isSameTree(node, subRoot)) return true;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return false;
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
}

export {};
