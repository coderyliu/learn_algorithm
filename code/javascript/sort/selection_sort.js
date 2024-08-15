/**
 * Filename: selection_sort.js
 * CreateTime: 2024-08-15
 * Author: coderyliu
 */

// ?选择排序的原理
// 非常简单：开启一个循环，每轮从未排序区间里选择最小的元素，将其放到已排序区间的末尾

// 选择排序 - O(n^2)
function selectionSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let k = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[k]) k = j;
    }
    // 解构赋值
    [nums[i], nums[k]] = [nums[k], nums[i]];
  }

  return nums;
}

/* Driver Code */
const nums = [4, 1, 3, 1, 5, 2];
selectionSort(nums);
console.log("选择排序完成后 nums =", nums);
