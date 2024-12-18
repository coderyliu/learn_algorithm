// 给定一个二叉树的根节点 root ，返回其节点值的层序遍历（即逐层地，从左到右访问所有节点）。

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

function decorateRecord(root: TreeNode | null): number[] {
  // 二叉树的层序遍历 - BFS
  // *存储方式：平铺
  if (!root) return [];
  const queue: TreeNode[] = [root];
  const res: number[] = [];
  while (queue.length) {
    const node = queue.shift();
    res.push(node!.val);
    if (node!.left) queue.push(node!.left);
    if (node!.right) queue.push(node!.right);
  }
  return res;

  // *存储方式：按层存储
  // if (!root) return [];
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
  // return res;
}

export {};
