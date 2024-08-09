/**
 * Filename: TreeNode.js
 * CreateTime: 2024-08-09
 * Author: coderyliu
 */

// 二叉树节点
class TreeNode {
  left;
  right;
  val;

  constructor(val, left, right) {
    this.val = val;
    this.left = left ? left : null;
    this.left = right ? right : null;
  }
}

// 将数组反序列化为二叉树
const arrToTree = (arr = [], i = 0) => {
  if (i < 0 || i >= arr.length || arr[i] === null) return null;
  let root = new TreeNode(arr[i]);
  root.left = arrToTree(arr, 2 * i + 1);
  root.right = arrToTree(arr, 2 * i + 2);
  return root;
};

module.exports = {
  TreeNode,
  arrToTree
};
