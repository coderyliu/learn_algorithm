// 给你一个整数数组 nums 和一个整数k ，请你统计并返回该数组中和为 k 的子数组的个数。
// 子数组是数组中元素的连续非空序列

// 示例 1：
// 输入：nums = [1,1,1], k = 2
// 输出：2 - [1,1] [1,1]

// 示例 2：
// 输入：nums = [1,2,3], k = 3
// 输出：2 - [1,2] [3]

function subarraySum(nums: number[], k: number): number {
  // 暴力解法 - 栈溢出
  // 1. 求出数组的所有连续子数组
  // const subArrays = getSubArray(nums);
  // 2. 求出数组中所有和为 k 的子数组
  // const res = subArrays.filter(
  // (subArray) => subArray.reduce((a, b) => a + b, 0) === k
  // );
  // 3. 返回数组中所有和为 k 的子数组的个数
  // return res.length;

  // 前缀和 + 哈希表
  // * 原理：
  // * 1. 前缀和 preSum 表示从数组开始到当前位置的和
  // * 2. 哈希表 hash 用于存储前缀和 preSum 出现的次数
  // * 3. 遍历数组，计算前缀和 preSum
  // * 4. 如果哈希表中存在 preSum - k，则 res 加上哈希表中 preSum - k 的值
  // * 5. 将 preSum 作为键，preSum 出现的次数作为值，存入哈希表
  const hash = new Map<number, number>();
  // 初始化哈希表，键为 0，值为 1 - 表示前缀和为 0 的次数为 1
  hash.set(0, 1);
  // 前缀和
  let preSum = 0;
  // 结果
  let res = 0;
  // 遍历数组
  for (let i = 0; i < nums.length; i++) {
    // 前缀和
    preSum += nums[i];
    // 如果哈希表中存在 preSum - k，则 res 加上哈希表中 preSum - k 的值
    if (hash.has(preSum - k)) {
      res += hash.get(preSum - k) || 0;
    }
    // 将 preSum 作为键，preSum 出现的次数作为值，存入哈希表
    hash.set(preSum, (hash.get(preSum) || 0) + 1);
  }
  return res;
}

function subarraySum2(nums: number[], k: number): number {
  return getSubArray(nums, 0, k);
}

// 求出数组的所有连续子数组
function getSubArray(arr: number[], count: number, target: number): number {
  // const res: number[][] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      const subArray = arr.slice(i, j + 1);
      if (subArray.reduce((a, b) => a + b, 0) === target) {
        count++;
      }
      // res.push(subArray);
    }
  }
  return count;
}

console.log(subarraySum([1, 1, 1], 2)); // 2
console.log(subarraySum([1, 2, 3], 3)); // 2
console.log(subarraySum2([1, 1, 1], 2)); // 2
console.log(subarraySum2([1, 2, 3], 3)); // 2

export {};
