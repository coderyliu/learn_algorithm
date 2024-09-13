// https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/description/

function searchRange(nums: number[], target: number): number[] {
  // 二分查找
  const n = nums.length;

  let l = 0;
  let r = n - 1;
  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);
    if (nums[mid] > target) {
      r = mid - 1;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      // 找到目标值，向左右寻找边界
      let start = mid;
      let end = mid;
      while (start >= 0 && nums[start] === target) {
        start--;
      }
      while (end < n && nums[end] === target) {
        end++;
      }

      return [start + 1, end - 1];
    }
  }

  return [-1, -1];
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([], 6));

export {};
