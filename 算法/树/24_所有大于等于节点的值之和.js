// https://leetcode.cn/problems/w6cpku/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// ?先层序遍历，找出所有大于节点的值之和,在转化为二叉搜索树
var convertBST = function (root) {
  if (!root) return null
  let queue = [root]
  let res = []
  while (queue.length) {
    let node = queue.shift()
    res.push(node.val)

    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }

  const map = new Map()
  for (let i = 0; i < res.length; i++) {
    let count = 0
    for (let j = 0; j < res.length; j++) {
      if (res[i] <= res[j]) {
        count += res[j]
      }
    }

    map.set(res[i], count)
  }

  const dfs = (node) => {
    if (!node) return
    if (map.has(node.val)) {
      node.val = map.get(node.val)
    }

    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)

  return root
};

// ?直接逆向中序遍历，从右到左
var convertBST = function (root) {
  let sum = 0
  const dfs = (root) => {
    if (!root) return
    dfs(root.right)
    sum += root.val
    root.val = sum
    dfs(root.left)
  }
  dfs(root)
  return root
}