// https://leetcode.cn/problems/maximum-width-of-binary-tree/
/**
 * @param {TreeNode} root
 * @return {number}
 */
//  ?由于要求最大宽度，且这个二叉树与满二叉树结构相同，故联想到满二叉树使用数组存储的特性，假设某个节点的索引是i，则它的左右孩子节点的索引为i2和i2+1；
//  ?使用广度优先搜索每一层每一层搜索，该层第一个节点与该层最后一个节点的索引之间的距离即为距离；
var widthOfBinaryTree = function (root) {
  // 层序遍历BFS+剪枝
  let maxWidth = 0
  if (root) {
    const queue = [root]
    let xs = [1]
    while (queue.length) {
      let size = queue.length
      let left, right
      if (size === 1) {
        xs = [1]
      }

      for (let i = 0; i < size; i++) {
        const node = queue.shift()
        let x = xs.shift()
        if (i === 0) {
          left = x
        }

        if (i === size - 1) {
          right = x
        }

        if (node.left) {
          queue.push(node.left)
          xs.push(2 * x)
        }

        if (node.right) {
          queue.push(node.right)
          xs.push(2 * x + 1)
        }
      }
      maxWidth = Math.max(maxWidth, right - left + 1)
    }
  }
};