/**
 * Filename: array_binary_tree.js
 * CreateTime: 2024-08-09
 * Author: coderyliu
 */

const { arrToTree } = require("../modules/TreeNode.js");

// 基于数组实现一个简单的二叉树
class ArrayBinaryTree {
  #tree;

  constructor(arr = []) {
    this.#tree = arr;
  }

  // 列表容量
  size() {
    return this.#tree.length;
  }

  // 获取索引为i的节点的节点值
  val(i) {
    if (i < 0 || i >= this.size()) return null;
    return this.#tree[i];
  }

  // 获取索引为i的节点的左子节点索引
  left(i) {
    return i * 2 + 1;
  }

  // 获取索引为i的节点的右子节点索引
  right(i) {
    return i * 2 + 2;
  }

  // 获取索引为i的节点的父节点索引
  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  // 层序遍历
  levelOrder() {
    const res = [];
    for (let i = 0; i < this.#tree.length; i++) {
      if (this.val(i) !== null) res.push(this.val(i));
    }

    return res;
  }

  // 深度遍历
  #dfs(i, order, res) {
    if (this.val(i) === null) return null;
    if (order === "pre") res.push(this.val(i));
    this.#dfs(this.left(i), order, res);
    if (order === "in") res.push(this.val(i));
    this.#dfs(this.right(i), order, res);
    if (order === "post") res.push(this.val(i));
  }

  // 前序遍历
  preOrder() {
    const res = [];
    this.#dfs(0, "pre", res);
    return res;
  }

  // 中序遍历
  inOrder() {
    const res = [];
    this.#dfs(0, "in", res);
    return res;
  }

  // 后序遍历
  postOrder() {
    const res = [];
    this.#dfs(0, "post", res);
    return res;
  }
}

/* Driver Code */
// 初始化二叉树
// 这里借助了一个从数组直接生成二叉树的函数
const arr = Array.of(
  1,
  2,
  3,
  4,
  null,
  6,
  7,
  8,
  9,
  null,
  null,
  12,
  null,
  null,
  15
);

const root = arrToTree(arr);
console.log("\n初始化二叉树\n");
console.log("二叉树的数组表示：");
console.log(arr);

// 数组表示下的二叉树类
const abt = new ArrayBinaryTree(arr);

// 访问节点
const i = 1;
const l = abt.left(i);
const r = abt.right(i);
const p = abt.parent(i);
console.log("\n当前节点的索引为 " + i + " ，值为 " + abt.val(i));
console.log(
  "其左子节点的索引为 " + l + " ，值为 " + (l === null ? "null" : abt.val(l))
);
console.log(
  "其右子节点的索引为 " + r + " ，值为 " + (r === null ? "null" : abt.val(r))
);
console.log(
  "其父节点的索引为 " + p + " ，值为 " + (p === null ? "null" : abt.val(p))
);

// 遍历树
let res = abt.levelOrder();
console.log("\n层序遍历为：" + res);
res = abt.preOrder();
console.log("前序遍历为：" + res);
res = abt.inOrder();
console.log("中序遍历为：" + res);
res = abt.postOrder();
console.log("后序遍历为：" + res);
