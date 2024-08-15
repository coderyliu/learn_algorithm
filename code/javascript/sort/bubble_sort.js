/**
 * FileName: bubble_sort.js
 * CreateTime: 2024-8-15
 * Author: coderyliu
 */

// ?冒泡排序
// 原理：每次从数组中选出最大的元素放到数组末尾，然后重复这个过程，直到数组有序。

// 冒泡排序 - O(n^2)
function bubbleSort(nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        const tmp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = tmp;
      }
    }
  }

  return nums;
}

/* Driver Code */
const nums = [4, 1, 3, 1, 5, 2];
bubbleSort(nums);
console.log("冒泡排序完成后 nums =", nums);
