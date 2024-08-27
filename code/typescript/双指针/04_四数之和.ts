// https://leetcode.cn/problems/4sum/description/

function fourSum(nums: number[], target: number): number[][] {
  // 双指针
  const res: number[][] = [];
  // 排序
  nums.sort((a, b) => a - b);
  // 去重
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let l = j + 1;
      let r = nums.length - 1;
      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r];
        if (sum === target) {
          if (!set.has(`${nums[i]},${nums[j]},${nums[l]},${nums[r]}`)) {
            res.push([nums[i], nums[j], nums[l], nums[r]]);
            set.add(`${nums[i]},${nums[j]},${nums[l]},${nums[r]}`);
          }
        }
        if (sum <= target) l++;
        if (sum > target) r--;
      }
    }
  }

  return res;
}

export {};
