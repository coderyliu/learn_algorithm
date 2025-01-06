function longestConsecutive(nums: number[]): number {
  // 方法一：暴力 + 排序 + 去重
  // * 时间复杂度：Onlog(n)
  // * 空间复杂度：O(n)
  // 排序 - Onlog(n)
  // nums.sort((a, b) => a - b);
  // 去重
  // const arr = [...new Set(nums)];
  // 遍历
  // if (nums.length === 0) return 0;
  // let count: number = 1;
  // let start: number = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] + 1 !== arr[i + 1]) {
  //     count = Math.max(count, i - start + 1);
  //     start = i + 1;
  //   }
  // }

  // return count;

  // 方法二：哈希表
  // * 时间复杂度：O(n)
  // * 空间复杂度：O(n)
  if (nums.length === 0) return 0;
  const set = new Set(nums);
  let longestStreak = 0;
  for (const num of nums) {
    if (set.has(num - 1)) continue; // 找到最小的数
    let currentNum = num;
    let currentStreak = 1;
    while (set.has(currentNum + 1)) {
      // 找到连续的数
      currentNum++;
      currentStreak++;
    }
    longestStreak = Math.max(longestStreak, currentStreak);
  }
  return longestStreak;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4

export {};
