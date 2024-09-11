// https://leetcode.cn/problems/first-missing-positive/solutions/2361129/ha-xi-zhi-huan-by-zhi-ma-xi-gua-jb21/

function firstMissingPositive(nums: number[]): number {
  // 哈希删除方法
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(i + 1, nums[i]);
  }

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] > 0 && map.has(nums[j])) {
      map.delete(nums[j]);
    }
  }

  return map.keys().next().value || nums.length + 1;
}

console.log(firstMissingPositive([1, 2, -1]));
console.log(firstMissingPositive([4, 5, 6]));

export {};
