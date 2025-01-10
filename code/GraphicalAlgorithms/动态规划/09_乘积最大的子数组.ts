// 给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

// 示例 1:
// 输入: nums = [2,3,-2,4]
// 输出: 6
// 解释: 子数组 [2,3] 有最大乘积 6。

// 示例 2:
// 输入: nums = [-2,0,-1]
// 输出: 0
// 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。

function maxProduct(nums: number[]): number {
  // 方法一：暴力 - 求出所有连续的子数组，判断对应的最大乘机
  // return getSubArray(nums);

  // 方法二：动态规划
  // 动规五部曲：
  // 1. 确定dp[i]的含义：dpMax dpMin
  // 2. 递推公式：
  // * 考虑负数的情况
  // 2.1 dpMax[i] = Math.max(dpMax[i - 1] * nums[i], Math.max(nums[i], dpMin[i - 1] * nums[i]))
  // 2.2 dpMin[i] = Math.min(dpMin[i - 1] * nums[i], Math.min(nums[i], dpMax[i - 1] * nums[i]))
  // * 不考虑负数的情况
  // dp[i] = Math.max(dp[i - 1] * nums[i], nums[i])
  // 3. 初始化dp数组: dpMax = [...nums] dpMin = [...nums]
  // 4. 确定遍历顺序：从前到后
  // 5. 举例论证

  const dpMax: number[] = [...nums];
  const dpMin: number[] = [...nums];
  for (let i = 1; i < nums.length; i++) {
    dpMax[i] = Math.max(
      dpMax[i - 1] * nums[i],
      Math.max(nums[i], dpMin[i - 1] * nums[i])
    );
    dpMin[i] = Math.min(
      dpMin[i - 1] * nums[i],
      Math.min(nums[i], dpMax[i - 1] * nums[i])
    );
  }

  let ans = dpMax[0];
  for (let i = 1; i < dpMax.length; i++) {
    ans = Math.max(ans, dpMax[i]);
  }

  return ans;
}

function getSubArray(arr: number[]): number {
  const res: number[][] = [];
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      const sub = arr.slice(i, j + 1);
      res.push(sub);
      max = Math.max(
        max,
        sub.reduce((pre, cur) => pre * cur, 1)
      );
    }
  }
  console.log(res);
  return max;
}

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));

export {};
