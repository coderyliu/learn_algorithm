// 给你一个由 n 个元素组成的整数数组 nums 和一个整数 k 。
// 请你找出平均数最大且长度为k的连续子数组，并输出该最大平均数。
// 任何误差小于 10-5 的答案都将被视为正确答案。

function findMaxAverage(nums: number[], k: number): number {
  // 方法一：暴力
  // * 时间复杂度O(n * k)
  // * 空间复杂度O(1)
  // let l = 0;
  // let r = k - 1;
  // let max = -Infinity;
  // while (r < nums.length) {
  //   const sum = nums.slice(l, r + 1).reduce((a, b) => a + b, 0);
  //   const avg = sum / k;
  //   max = Math.max(max, avg);
  //   l++;
  //   r++;
  // }

  // return max;

  // 方法二：优化
  let max = -Infinity;
  let now = 0;
  for (let i = 0; i < k; i++) {
    now += nums[i];
  }
  max = now;
  for (let i = k; i < nums.length; i++) {
    now += nums[i] - nums[i - k];
    if (now > max) max = now;
  }

  return max / k;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75

export {};
