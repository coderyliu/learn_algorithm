// https://leetcode.cn/problems/degree-of-an-array/description/

function findShortestSubArray(nums: number[]): number {
  // 方法：哈希表
  // *时间复杂度：O(n)
  // *空间复杂度：O(n)
  // 哈希表记录每个数字出现的次数和索引
  const map = new Map<number, number[]>();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(num)) {
      map.get(num)?.push(i);
    } else {
      map.set(num, [i]);
    }
  }

  let max = 0; // 记录最大度
  let minLen = Infinity; // 记录最短子数组长度
  for (const [num, indices] of map.entries()) {
    const len = indices.length;
    if (len > max) {
      max = len; // 更新最大度
      minLen = indices[len - 1] - indices[0] + 1; // 更新最短子数组长度
    } else if (len === max) {
      minLen = Math.min(minLen, indices[len - 1] - indices[0] + 1); // 更新最短子数组长度
    }
  }
  return minLen;
}

console.log(findShortestSubArray([1, 2, 2, 3, 1]));
console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]));

export {};
