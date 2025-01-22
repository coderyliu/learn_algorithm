// 给你一个整数数组 arr ，请你帮忙统计数组中每个数的出现次数。
// 如果每个数的出现次数都是独一无二的，就返回 true ；否则返回 false 。

function uniqueOccurrences(arr: number[]): boolean {
  // 哈希
  const map = new Map<number, number>();
  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const set = new Set(map.values());
  return set.size === Array.from(map.values()).length;
}

console.log(uniqueOccurrences([1, 1, 2, 2, 2, 2, 3])); // true
console.log(uniqueOccurrences([1, 1, 2, 2, 2, 2, 3, 3, 3])); // false
console.log(
  uniqueOccurrences([
    26, 2, 16, 16, 5, 5, 26, 2, 5, 20, 20, 5, 2, 20, 2, 2, 20, 2, 16, 20, 16,
    17, 16, 2, 16, 20, 26, 16
  ])
);

export {};
