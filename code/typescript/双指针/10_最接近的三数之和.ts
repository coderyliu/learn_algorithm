// https://leetcode.cn/problems/3sum-closest/description/

function threeSumClosest(nums: number[], target: number): number {
  // 双指针
  nums.sort((a, b) => a - b);
  let min = Infinity;
  for (let i = 0; i < nums.length; i++) {
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (Math.abs(target - sum) < Math.abs(target - min)) {
        min = sum;
      }
      if (sum > target) r--;
      if (sum <= target) l++;
    }
  }

  return min;
}

console.log(threeSumClosest([-1, 2, 1, -4], 1));

export {};
