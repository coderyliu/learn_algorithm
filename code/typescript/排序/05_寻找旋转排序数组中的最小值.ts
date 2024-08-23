function findMin(nums: number[]): number {
  // 方法一：暴力解决 - O(nlogn)
  // nums.sort((a, b) => a - b);
  // return nums[0];

  // 方法二： 暴力 - O(n)
  // return Math.min(...nums);

  // 方法三： 二分查找 - O(logn)
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const mid = Math.floor(l + (r - l) / 2);
    if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return nums[l];
}

export {};
