// https://leetcode.cn/problems/jump-game-ii/solutions/1653610/tiao-yue-by-1105389168-33vw/

function jump(nums: number[]): number {
  // 贪心
  // 局部最优：每次跳跃都尽可能远
  // 全局最优：跳跃次数最少
  let res = 0; // 跳跃次数
  let cur = 0; // 当前位置
  let next = 0; // 下一次跳跃的最大距离
  // 注意：这里 i < nums.length - 1，因为题目要求的是跳跃次数，而不是跳跃的最大距离
  for (let i = 0; i < nums.length - 1; i++) {
    next = Math.max(next, nums[i] + i); // 更新下一次跳跃的最大距离
    if (i === cur) {
      cur = next;
      res++;
      if (cur >= nums.length - 1) break; // 如果当前位置已经可以跳到最后，则退出循环
    }
  }

  return res;
}

console.log(jump([2, 3, 1, 1, 4]));

export {};
