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

function maxLevelSum(root: TreeNode | null): number {
  // BFS - 广度优先遍历
  if (!root) return 0;
  const queue: { node: TreeNode; level: number }[] = [{ node: root, level: 0 }];
  const res: number[][] = [];
  while (queue.length) {
    const { node, level } = queue.shift()!;
    if (!res[level]) {
      res[level] = [node.val];
    } else {
      res[level].push(node.val);
    }
    if (node.left) queue.push({ node: node.left, level: level + 1 });
    if (node.right) queue.push({ node: node.right, level: level + 1 });
  }
  let max = -Infinity;
  let maxLevel = 0;
  for (let i = 0; i < res.length; i++) {
    const sum = res[i].reduce((a, b) => a + b);
    if (sum > max) {
      max = sum;
      maxLevel = i;
    }
  }

  return maxLevel + 1;
}

const root = new TreeNode(1);
root.left = new TreeNode(7);
root.right = new TreeNode(0);
root.left.left = new TreeNode(7);
root.left.right = new TreeNode(-8);
console.log(maxLevelSum(root)); // 2

export {};
