function minSubArrayLen(target: number, nums: number[]): number {
  // 滑动窗口
  let left = 0;
  let right = 0;

  let sum = 0;
  let res = Infinity;

  while (right < nums.length) {
    sum += nums[right++];
    while (sum >= target) {
      res = Math.min(res, right - left);
      sum -= nums[left++];
    }
  }

  return res === Infinity ? 0 : res;
}

export {};
