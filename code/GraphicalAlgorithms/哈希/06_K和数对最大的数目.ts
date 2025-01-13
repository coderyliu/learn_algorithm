// 给你一个整数数组 nums 和一个整数 k ，每一步操作中，你需要从数组中选出和为 k 的两个整数，并将它们移出数组。
// 返回你可以对数组执行的最大操作数。

function maxOperations(nums: number[], k: number): number {
  // 哈希
  // * 时间复杂度：O(n)
  // * 空间复杂度：O(n)
  const map = new Map<number, number>();
  // 1. 遍历数组，将数组中的元素作为键，出现的次数作为值，存入哈希表
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // 2. 遍历数组，判断是否存在和为 k 的数对
  let count = 0;
  for (const num of nums) {
    if (num >= k) continue;
    if (num === k - num && (map.get(num) || 0) <= 1) {
      continue;
    }
    if (
      map.has(k - num) &&
      (map.get(num) || 0) > 0 &&
      (map.get(k - num) || 0) > 0
    ) {
      count++;
      map.set(k - num, (map.get(k - num) || 0) - 1);
      map.set(num, (map.get(num) || 0) - 1);
    }
  }
  return count;
}

// console.log(maxOperations([1, 2, 3, 4], 5)); // 2
// console.log(maxOperations([3, 1, 3, 4, 3], 6)); // 1
// console.log(
//   maxOperations([2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2], 3)
// ); // 4
console.log(maxOperations([2, 2, 2, 3, 1, 1, 4, 1], 4)); // 2

export {};
