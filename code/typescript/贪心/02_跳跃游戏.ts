// 这道题不在于每次 jump 的数，而在于每次跳的距离是否可以覆盖到最后。
// 局部最优：最大跳跃位置是否可以覆盖全局
// 全局最优：是否可以跳到最后

function canJump(nums: number[]): boolean {
  let cover = 0;
  for (let i = 0; i <= cover; i++) {
    cover = Math.max(cover, nums[i] + i);
    if (cover >= nums.length - 1) return true;
  }

  return false;
}

export {};
