// https://leetcode.cn/problems/count-of-smaller-numbers-after-self/description/

function countSmaller(nums: number[]): number[] {
  // 方法一：暴力 - O(n^2) - 超时
  const res: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    let count = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < cur) count++;
    }
    res.push(count);
  }

  return res;

  // 方法二：归并排序 - O(nlogn)
}

console.log(countSmaller([-1, -1]));
console.log(countSmaller([5, 2, 6, 1]));

export {};
