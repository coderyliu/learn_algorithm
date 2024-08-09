/**
 * @description leetcode的面试经典150 - 104
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

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
  // 方法一：采用广度优先遍历
  if (!root) return 0;
  const res: any[] = [];
  const queue: any[] = [{ node: root, level: 0 }];
  while (queue.length) {
    const { node, level } = queue.shift();
    if (res[level]) {
      res[level].push(node.val);
    } else {
      res[level] = [node.val];
    }
    if (node.left) queue.push({ node: node.left, level: level + 1 });
    if (node.right) queue.push({ node: node.right, level: level + 1 });
  }

  return res.length;

  // 方法二：采用深度优先遍历
  // if (!root) return 0;
  // let max = 0;
  // const dfs = (node: TreeNode | null, level: number) => {
  //   if (!node) return;
  //   if (level > max) max = level;
  //   dfs(node.left, level + 1);
  //   dfs(node.right, level + 1);
  // };
  // dfs(root, 1);
}

export {};
