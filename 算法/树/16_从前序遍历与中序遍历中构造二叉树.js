// https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) return null
  const rootVal = preorder.shift()
  let root = new TreeNode(rootVal)
  let rootIndex = inorder.indexOf(rootVal)
  root.left = buildTree(preorder.slice(0, rootIndex), inorder.slice(0, rootIndex))
  root.right = buildTree(preorder.slice(rootIndex), inorder.slice(rootIndex + 1))

  return root
};