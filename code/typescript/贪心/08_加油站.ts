// https://leetcode.cn/problems/gas-station/description/

function canCompleteCircuit(gas: number[], cost: number[]): number {
  // 方法一：暴力 - 超时
  // *时间复杂度：O(n^2)
  // *空间复杂度：O(1)
  // for (let i = 0; i < gas.length; i++) {
  //   if (gas[i] < cost[i]) continue;
  //   let start = i;
  //   let remain = gas[i];
  //   while (remain >= cost[start]) {
  //     remain = remain - cost[start];
  //     start++;
  //     if (start === gas.length) start = 0;
  //     remain += gas[start];
  //     if (start === i) return i;
  //   }
  // }
  // return -1;

  // 方法二：贪心
  // ?思路：如果总油量减去总消耗大于等于零那么一定可以跑完一圈，因此要跑完一圈就要保证在各个站点的加油站剩油量 rest[i] >= 0；
  // 遍历数组 i 从 0 开始累加 rest[i] ，和记为 curSum；
  // 计算每个加油站的剩余量 curSum += gas[i] − cost[i]；
  // 若 curSum 小于零，说明 [0, i] 区间都不能作为起始位置，起始位置从 i+1 算起，curSum 清零重新计算；
  // *时间复杂度：O(n)
  // *空间复杂度：O(1)
  let totalSum = 0; // 总剩余油量
  let curSum = 0; // 当前起点剩余油量
  let start = 0; // 起点

  // 从每个起点开始模拟, 是否能跑完全程
  for (let i = 0; i < gas.length; i++) {
    totalSum += gas[i] - cost[i];
    curSum += gas[i] - cost[i];
    if (curSum < 0) {
      curSum = 0;
      start = i + 1;
    }
  }
  if (totalSum < 0) return -1;
  return start;
}

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])); // 3
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3])); // -1

export {};
