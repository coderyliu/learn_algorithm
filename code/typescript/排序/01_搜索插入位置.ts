// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 请必须使用时间复杂度为 O(log n) 的算法。

function searchInsert(nums: number[], target: number): number {
  // 二分查找插入点：左闭右闭
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);
    if (nums[mid] > target) {
      r = mid - 1;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      // 无重复元素
      // return mid;

      // ?有重复元素
      r = mid - 1;
    }
  }

  return l;
}

export {};
