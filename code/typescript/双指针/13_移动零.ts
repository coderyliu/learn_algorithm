// https://leetcode.cn/problems/move-zeroes/description/

function moveZeroes(nums: number[]): void {
  // 双指针
  const len = nums.length;
  let l = 0;
  // 将非零元素移动到数组前面
  for (let i = 0; i < len; i++) {
    if (nums[i] !== 0) nums[l++] = nums[i];
  }
  // 将剩余元素设置为0
  for (let i = l; i < len; i++) {
    nums[i] = 0;
  }
}

console.log(moveZeroes([0, 1, 0, 3, 12]));

export {};
