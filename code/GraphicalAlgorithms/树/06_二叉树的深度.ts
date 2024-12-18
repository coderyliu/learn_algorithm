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

function maxDepth(root: TreeNode | null): number {
  // 方法一：层序遍历 - BFS
  // if (!root) return 0;
  // const queue: { node: TreeNode; level: number }[] = [{ node: root, level: 0 }];
  // const res: number[][] = [];
  // while (queue.length) {
  //   const { node, level } = queue.shift()!;
  //   if (res[level]) {
  //     res[level].push(node.val);
  //   } else {
  //     res[level] = [node.val];
  //   }
  //   if (node.left) queue.push({ node: node.left, level: level + 1 });
  //   if (node.right) queue.push({ node: node.right, level: level + 1 });
  // }
  // return res.length;

  // 方法二：DFS
  if (!root) return 0;
  let level: number = 1;
  const dfs = (node: TreeNode | null, layer: number) => {
    if (!node) return;
    level = Math.max(level, layer);
    dfs(node.left, layer + 1);
    dfs(node.right, layer + 1);
  };
  dfs(root, 1);
  return level;
}

export {};
