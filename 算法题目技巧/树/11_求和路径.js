// https://leetcode.cn/problems/paths-with-sum-lcci/
var pathSum = function (root, sum) {
  const dfs = (node, total) => {
    if (!node) return;
    if (total === sum) {
      ans++;
    }
    if (node.left) {
      let value = node.left.val;
      dfs(node.left, total + value);
    }
    if (node.right) {
      let value = node.right.val;
      dfs(node.right, total + value);
    }
  }

  const bst = node => {
    if (!node) return;
    bst(node.left);
    bst(node.right);
    dfs(node, node.val);
  }

  if (!root) return [];
  let ans = 0;
  bst(root, ans);
  return ans;
};