/**
 * Filename: binary_search_tree.js
 * CreateTime: 2024-08-09
 * Author: coderyliu
 */

const { TreeNode } = require("../modules/TreeNode.js");

// 基于链表实现二叉搜索树
class BinarySearchTree {
  root;
  constructor() {
    this.root = null;
  }

  // 插入操作
  insert(key) {
    // 创建一个新的节点
    const newNode = new TreeNode(key);

    // 遍历二叉搜索树，找到合适的位置添加
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  // 遍历寻找合适的节点添加
  insertNode(root, newNode) {
    if (root.val > newNode.val) {
      // 左子树中查找
      if (!root.left) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      // 右子树中查找
      if (!root.right) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  // 二叉树的遍历
  // 前序遍历：根节点->左子树->右子树
  preOrderTraversal() {
    const res = [];
    this.preOrderTraversalNode(this.root, res);
    return res;
  }

  preOrderTraversalNode(node, res) {
    if (!node) return null;
    res.push(node.val);
    this.preOrderTraversalNode(node.left, res);
    this.preOrderTraversalNode(node.right, res);
  }

  // 中序遍历：左子树->根节点->右子树
  inOrderTraversal() {
    const res = [];
    this.inOrderTraversalNode(this.root, res);
    return res;
  }

  inOrderTraversalNode(node, res) {
    if (!node) return null;
    this.inOrderTraversalNode(node.left, res);
    res.push(node.val);
    this.inOrderTraversalNode(node.right, res);
  }

  // 后序遍历：左子树->右子树->根节点
  postOrderTraversal() {
    const res = [];
    this.postOrderTraversalNode(this.root, res);
    return res;
  }

  postOrderTraversalNode(node, res) {
    if (!node) return null;
    this.postOrderTraversalNode(node.left, res);
    this.postOrderTraversalNode(node.right, res);
    res.push(node.val);
  }

  // 层序遍历
  levelOrderTraversal() {
    const res = [];
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      res.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return res;
  }

  // 获取二叉树中的最小值
  min() {
    if (!this.root) return null;
    let node = this.root;
    while (node.left) {
      node = node.left;
    }
    return node.val;
  }

  // 获取二叉树中的最大值
  max() {
    if (!this.root) return null;
    let node = this.root;
    while (node.right) {
      node = node.right;
    }
    return node.val;
  }

  // 删除节点
  remove(key) {
    let currentNode = this.root;
    let parentNode = null;
    let isLeftChild = false;
    // 遍历找到要删除的节点的位置，以及它的parentNode,isLeftChild
    while (currentNode.val !== key) {
      parentNode = currentNode;

      // 小于，往左查找
      if (currentNode.val > key) {
        currentNode = currentNode.left;
        isLeftChild = true;
      } else {
        // 大于，往右查找
        currentNode = currentNode.right;
        isLeftChild = false;
      }

      // 找到最后没有找到相等的节点，返回false
      if (currentNode === null) {
        return false;
      }
    }

    // 删除的三种情况
    // 1. 要删除的节点是叶子节点
    // 2. 要删除的节点只有一个子节点
    // 3. 要删除的节点有两个子节点
    if (!currentNode.left && !currentNode.right) {
      // 第一种情况
      if (currentNode === this.root) {
        this.root = null;
      } else if (isLeftChild) {
        parentNode.left = null;
      } else {
        parentNode.right = null;
      }
    } else if (!currentNode.right) {
      // 第二种情况,只存在左节点
      if (currentNode === this.root) {
        this.root = currentNode.left;
      } else if (isLeftChild) {
        parentNode.left = currentNode.left;
      } else {
        parentNode.right = currentNode.left;
      }
    } else if (!currentNode.left) {
      // 第二种情况,只存在右节点
      if (currentNode === this.root) {
        this.root = currentNode.right;
      } else if (isLeftChild) {
        parentNode.left = currentNode.right;
      } else {
        parentNode.right = currentNode.right;
      }
    } else {
      // 第三种情况：两种处理办法
      // 1. 用后续节点的右节点的最小值
      // 2. 用左节点的最大值
      const successor = this.getSuccessor(currentNode);

      // 判断是否为根节点
      if (this.root === currentNode) {
        this.root = successor;
      } else if (isLeftChild) {
        parentNode.left = successor;
      } else {
        parentNode.right = successor;
      }
    }
  }

  // 获取后续节点的右节点的最小值
  getSuccessor(delNode) {
    let current = delNode.right;
    let successor = delNode;
    let successorParent = delNode;

    // 循环查找current的右子树节点的最小值
    while (current) {
      successorParent = successor;
      successor = current;
      current = current.left;
    }

    // 判断寻找到的后续节点是否是直接要删除节点的right
    if (successor !== delNode.right) {
      successorParent.left = successor.right;
      successor.right = delNode.right;
    }
    return successor;
  }
}

// ---------------- 封装的树结构测试 ---------------- //
console.log("// ----- 树结构测试 START -----//");

// 二叉搜索树测试
// insert() 插入
const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(11);
binarySearchTree.insert(7);
binarySearchTree.insert(5);
binarySearchTree.insert(3);
binarySearchTree.insert(9);
binarySearchTree.insert(8);
binarySearchTree.insert(10);
binarySearchTree.insert(15);
binarySearchTree.insert(13);
binarySearchTree.insert(12);
binarySearchTree.insert(14);
binarySearchTree.insert(20);
binarySearchTree.insert(18);
binarySearchTree.insert(25);
binarySearchTree.insert(19);
console.log(binarySearchTree);

console.log("前序遍历", binarySearchTree.preOrderTraversal());
console.log("中序遍历", binarySearchTree.inOrderTraversal());
console.log("后序遍历", binarySearchTree.postOrderTraversal());
console.log("min", binarySearchTree.min());
console.log("max", binarySearchTree.max());

console.log("remove(20)");
binarySearchTree.remove(20);
console.log(binarySearchTree);
console.log(binarySearchTree.inOrderTraversal());

console.log("// -----树结构测试 END -----//");
