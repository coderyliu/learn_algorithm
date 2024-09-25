// https://leetcode.cn/problems/target-sum/description/

function findTargetSumWays(nums: number[], target: number): number {
  // 方法一： DFS - 时间复杂度 O(2^n)
  // 穷举出所有数字分别取正和负，再将穷举的 数字 与目标和 target 进行相加，则可以在 target = 0 时找到一个解
  let res = 0;
  const dfs = (layer: number, target: number) => {
    if (layer === nums.length) {
      if (target === 0) res++;
      return;
    }
    dfs(layer + 1, target - nums[layer]);
    dfs(layer + 1, target + nums[layer]);
  };

  dfs(0, target);
  return res;

  // 方法二： 动态规划 - 时间复杂度 O(n * sum)
  // 方法三：子集
}

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3)); // 5
console.log(findTargetSumWays([1], 1)); // 1

export {};
