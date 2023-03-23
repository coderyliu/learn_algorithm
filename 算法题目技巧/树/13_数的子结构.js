// https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof/
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  //首先判断B是否为空树，返回false 判断A也是否为空树，以及递归后A是否为空树（在A上面找B的根节找不到）
  if (A == null || B == null) return false;
  //假如B的根节点在A上找到了
  if (A.val == B.val) {
    //findWay判断A左子树（右子数）是否包含或等于B左子树（右子数）
    var ifNotTrue = findWay(A.left, B.left) && findWay(A.right, B.right)
    //都包含 就在递归中抛出函数返回值
    if (ifNotTrue == true) return true;
  }
  //可能B的根节点在A上有多处相同 因此要递归不断查找 直到上面的ifNotTrue==true
  var ifAllTrue = isSubStructure(A.left, B) || isSubStructure(A.right, B);
  return ifAllTrue;
}
var findWay = function (x, y) {
  //如果A子树为空 B子树还在返回false
  if (x == null && y != null) return false;
  //包含A子树为空，B子树为空和A子树不为空，B子树为空
  if (y == null) return true;
  //相等的话继续查找下一级子树
  if (x.val != y.val) {
    return false
  } else {
    var ifTrue = findWay(x.left, y.left) && findWay(x.right, y.right);
  }
  return ifTrue;
}