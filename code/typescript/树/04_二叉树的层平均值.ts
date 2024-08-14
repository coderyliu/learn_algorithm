/**
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

function averageOfLevels(root: TreeNode | null): number[] {
  // 层序遍历 - BFS
  const queue: any[] = [{ node: root, level: 0 }];
  const res: number[][] = [];
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

  return res.map((nodeArr) => nodeArr.reduce((a, b) => a + b) / nodeArr.length);
}

export {};
