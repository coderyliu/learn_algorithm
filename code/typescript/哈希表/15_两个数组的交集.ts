// https://leetcode.cn/problems/intersection-of-two-arrays/description/

function intersection(nums1: number[], nums2: number[]): number[] {
  // 方法一：暴力

  // 方法二： 优化 - 哈希表 - set
  // *时间复杂度：O(n)
  // *空间复杂度：O(n)
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const res: number[] = [];
  for (const n of set1) {
    if (set2.has(n)) {
      res.push(n);
    }
  }
  return res;
}

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));

export {};
