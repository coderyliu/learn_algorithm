// https://leetcode.cn/problems/maximum-product-subarray/description/

function maxProduct(nums: number[]): number {
  // 方法一：暴力 - 求出所有连续的子数组的乘积，取最大值 - 超出内存限制(通过用例186/190)
  // *时间复杂度：O(n^2)
  // *空间复杂度：O(n^2)
  // const subArr = getSubArray(nums);
  // let max = -Infinity;
  // for (const arr of subArr) {
  //   const product = arr.reduce((acc, cur) => acc * cur, 1);
  //   max = Math.max(max, product);
  // }
  // return max;

  // 方法二：动态规划
  // 动态规划五部曲：
  // 1. 确定dp数组以及下标的含义： dp[i]表示以nums[i]结尾的子数组的最大乘积
  // 2. 确定递推公式： dp[i] = Math.max(dp[i-1] * nums[i], nums[i])
  // 3. 初始化dp数组： dp[0] = nums[0]
  // 4. 确定遍历顺序： 由前到后
  // 5. 举例推导dp数组
  // *这种的前提是数组中所有的数都是正数，如果数组中有负数，则需要考虑负负得正的情况
  // const len = nums.length;
  // const dp: number[] = Array(len).fill(0);
  // dp[0] = nums[0];
  // for (let i = 1; i < len; i++) {
  //   dp[i] = Math.max(dp[i - 1] * nums[i], nums[i]);
  // }
  // return Math.max(...dp);

  // * 考虑负数的情况
  if (nums.length == 0) return 0;
  let dpMax = [...nums], dpMin = [...nums];
  for (let i = 1; i < nums.length; i++) {
    dpMax[i] = Math.max(dpMax[i - 1] * nums[i], Math.max(nums[i], dpMin[i - 1] * nums[i]));
    dpMin[i] = Math.min(dpMin[i - 1] * nums[i], Math.min(nums[i], dpMax[i - 1] * nums[i]));
  }
  let ans = dpMax[0];
  for (let i = 1; i < dpMax.length; i++) {
    ans = Math.max(ans, dpMax[i]);
  }
  return ans;
}

// 获取所有连续的子数组
const getSubArray = (nums: number[]): number[][] => {
  const res: number[][] = [];
  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j < i; j++) {
      res.push(nums.slice(j, i));
    }
  }
  return res;
};

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));

export {};
