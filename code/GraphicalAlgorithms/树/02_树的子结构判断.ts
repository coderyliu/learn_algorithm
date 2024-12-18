// 输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

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

function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  // 层序遍历，记录每个字节点, 然后判断B是否在A中
  if (!A || !B) return false;
  const queue: TreeNode[] = [A];
  while (queue.length) {
    const node = queue.shift()!;
    if (isSameTree(node, B)) return true;
    if (node!.left) queue.push(node!.left);
    if (node!.right) queue.push(node!.right);
  }
  return false;
}

// 判断两棵树是否相等
function isSameTree(A: TreeNode | null, B: TreeNode | null): boolean {
  if (!A && !B) return true;
  if (!A || !B) return false;
  return (
    A.val === B.val &&
    isSameTree(A.left, B.left) &&
    isSameTree(A.right, B.right)
  );
}

export {};
