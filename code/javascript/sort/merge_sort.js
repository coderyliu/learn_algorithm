// 归并排序
// 归并排序的思想是分而治之，将待排序数组拆分为若干个子数组，然后对子数组进行排序，最后将排序好的子数组合并成一个大的有序数组。
// 主要用于合并有序数组，时间复杂度O(nlogn)，空间复杂度O(n)

// 步骤
// 1. 拆分
// 2. 排序
// 3. 合并

// 其思想类似于二叉树的后序遍历：
// 后序遍历：左子树 -> 右子树 -> 根节点
// 归并排序：左子数组 -> 右子数组 -> 合并

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(mergeSort(arr));
