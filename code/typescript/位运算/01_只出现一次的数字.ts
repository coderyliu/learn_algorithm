function singleNumber(nums: number[]): number {
  // 方式一：遍历 + hash
  const map = new Map();
  for (const num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  for (const [key, value] of map) {
    if (value === 1) {
      return key;
    }
  }
  return -1;

  // 方式二：位运算
  // TODO
}

export {};
