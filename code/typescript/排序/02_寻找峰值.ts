// 峰值元素是指其值严格大于左右相邻值的元素。
// 给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。
// 你必须实现时间复杂度为 O(log n) 的算法来解决此问题。

function findPeakElement(nums: number[]): number {
  // 方法一：暴力解决 - O(n)
  // if (nums.length === 1) return 0;
  // if (nums.length === 2) return nums[0] > nums[1] ? 0 : 1;
  // for (let i = 1; i < nums.length - 1; i++) {
  //   if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
  //     return i;
  //   }
  // }

  // if (nums[0] > nums[1]) return 0;
  // return nums.length - 1;

  // 方法二：二分查找 - O(log n)
  if (nums.length === 1) return 0;
  if (nums.length === 2) return nums[0] > nums[1] ? 0 : 1;
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const mid = Math.floor(l + (r - l) / 2);
    if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) return mid;
    // 如果nums[mid] > nums[mid + 1]说明左侧存在峰值
    if (nums[mid] > nums[mid + 1]) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
}

export {};
