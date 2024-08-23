function search(nums: number[], target: number): number {
  // 1. 暴力解法 - O(n)
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === target) return i;
  // }
  // return -1

  // 2. 直接利用 indexOf() - O(n)
  // return nums.indexOf(target);

  // 3. 二分查找 - O(logn)
  // 旋转后的数组不是有序的，但是可以拆分为两个有序的数组 - 局部有序
  // 条件：旋转后的数组的第一个元素大于最后一个元素
  const len = nums.length;
  let low = 0;
  let high = len - 1;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (nums[mid] === target) return mid;
    // 有序数组在左侧 nums[mid] >= nums[low]
    if (nums[mid] >= nums[low]) {
      // target 在左边有序数组的 靠左位置
      if (nums[low] <= target && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      // 有序数组在右侧 nums[mid] < nums[low]
      if (nums[high] >= target && target > nums[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
}

export {};
