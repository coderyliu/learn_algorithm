// https://leetcode.cn/problems/sort-an-array/description/

function sortArray(nums: number[]): number[] {
  if (nums.length <= 1) return nums;
  const mid = Math.floor(nums.length / 2);
  const item = nums.splice(mid, 1)[0];
  const left: number[] = [];
  const right: number[] = [];
  for (const num of nums) {
    if (num < item) {
      left.push(num);
    } else {
      right.push(num);
    }
  }

  return sortArray(left).concat(item, sortArray(right));
}

export {};
