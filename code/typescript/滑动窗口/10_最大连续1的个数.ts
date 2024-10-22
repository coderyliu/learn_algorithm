// https://leetcode.cn/problems/max-consecutive-ones-iii/description/

function longestOnes(nums: number[], k: number): number {
  // 滑动窗口
  // *时间复杂度：O(n)
  // *空间复杂度：O(1)
  let l: number = 0;
  let r: number = 0;
  let zCount: number = 0;
  let ret: number = 0;
  while (r < nums.length) {
    // 向右扩大窗口
    if (nums[r++] !== 1) zCount++; // 遇到0，记录0的个数
    while (zCount > k) {
      // 遇到0的个数超过k，缩小窗口
      if (nums[l++] !== 1) zCount--; // 更新窗口内0的个数
    }
    ret = Math.max(ret, r - l); // 更新最大长度
  }
  return ret;
}

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));

export {};
