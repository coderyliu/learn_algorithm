/**
 * FileName: build_tree.js
 * CreateTime: 2024-08-30
 * Author: coderyliu
 */

const { TreeNode } = require("../modules/TreeNode.js");

// 从前序遍历与中序遍历中构建二叉树 - 分治算法
function buildTree(preOrder, inOrder) {
  // 用 map 存储中序遍历的索引
  const map = new Map();
  for (let i = 0; i < inOrder.length; i++) {
    map.set(inOrder[i], i);
  }
  // 分治
  // i 为根节点在前序遍历中的索引
  // m 为根节点在中序遍历中的索引
  // l - r 为节点树的中序遍历的范围
  // 左子节点个数 = m - l
  // 右子节点个数 = r - m
  const dfs = (preOrder, map, i, l, r) => {
    if (r - l < 0) return null;
    // 构建根节点
    const root = new TreeNode(preOrder[i]);
    // 查询 m 的索引，构建左子树、右子树
    const m = map.get(preOrder[i]);
    // 递归构建左子树和右子树
    root.left = dfs(preOrder, map, i + 1, l, m - 1);
    root.right = dfs(preOrder, map, i + 1 + m - l, m + 1, r);
  };

  const root = dfs(preOrder, map, 0, 0, inOrder.length - 1);
  return root;
}

/* Driver Code */
const preorder = [3, 9, 2, 1, 7];
const inorder = [9, 3, 1, 2, 7];
console.log("前序遍历 = " + JSON.stringify(preorder));
console.log("中序遍历 = " + JSON.stringify(inorder));
const root = buildTree(preorder, inorder);
console.log("构建的二叉树为：", root);
