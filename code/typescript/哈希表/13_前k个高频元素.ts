// https://leetcode.cn/problems/top-k-frequent-elements/

function topKFrequent(nums: number[], k: number): number[] {
  // 方法一：借助哈希表
  // *时间复杂度：O(nlogn)
  // *空间复杂度：O(n)
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  const sortedMap = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);

  return sortedMap.slice(0, k).map((item) => item[0]);
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3, 4, 4, 4], 2));
console.log(topKFrequent([1], 1));

export {};
