// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
// 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

function longestConsecutive(nums: number[]): number {
  // 方法一：排序 + 遍历
  // if (!nums.length) return 0
  // nums.sort((a, b) => a - b);
  // let ans = 1;
  // let tmp = 1;
  // for (let i = 1; i < nums.length; i++) {
  //   if (nums[i] === nums[i - 1]) continue;
  //   if (nums[i] - nums[i - 1] === 1) {
  //     tmp++;
  //   } else {
  //     tmp = 1;
  //   }

  //   ans = Math.max(ans, tmp);
  // }

  // return ans;

  // 方法二：哈希表
  if (!nums.length) return 0;
  const set = new Set(nums);
  let longestStreak = 0;
  for (const num of nums) {
    if (set.has(num - 1)) continue;
    let currentNum = num;
    let currentStreak = 1;
    while (set.has(currentNum + 1)) {
      currentNum++;
      currentStreak++;
    }
    longestStreak = Math.max(longestStreak, currentStreak);
  }
  return longestStreak;
}

export {};
