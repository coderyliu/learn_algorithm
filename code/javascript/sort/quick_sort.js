/**
 * FileName: quick_sort.js
 * CreateTime: 2024-8-16
 * Author: coderyliu
 */

// ?快速排序
// 原理：选择一个基准数，进行哨兵划分，比基准数小的放左边，比基准数大的放右边，递归处理左右两边的子数组，直到数组只有一个元素

// 快速排序 - O(nlogn)
// 方式一：易于理解
function quickSort(nums) {
  if (nums.length <= 1) return nums;
  const pivotIndex = Math.floor(nums.length / 2);
  const pivot = nums.splice(pivotIndex, 1)[0];
  const left = [];
  const right = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
}

// 方式二：哨兵排序
function partition(nums, left, right) {
  let i = left;
  let j = right;

  while (i < j) {
    while (i < j && nums[j] >= nums[left]) {
      // 从右向左查找首个小于基准数的元素
      j -= 1;
    }

    while (i < j && nums[i] <= nums[left]) {
      // 从左向右查找首个大于基准数的元素
      i += 1;
    }
    // 元素交换
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  // 将基准数交换至两子数组的分界线
  [nums[left], nums[i]] = [nums[i], nums[left]];
  return i; // 返回基准数的索引
}

// 快速排序 - O(nlogn)
function quickSortTwo(nums, left, right) {
  // 子数组长度为 1 时终止递归
  if (left >= right) return;
  // 哨兵划分
  const pivotIndex = partition(nums, left, right);
  // 递归左数组
  quickSortTwo(nums, left, pivotIndex - 1);
  // 递归右数组
  quickSortTwo(nums, pivotIndex + 1, right);
}

/* Driver Code */
const nums = [4, 1, 3, 1, 5, 2];
const newNum = quickSort(nums);
console.log("快速排序完成后 nums =", newNum);

quickSortTwo(nums, 0, nums.length - 1);
console.log("哨兵划分处理后 nums=", nums);
