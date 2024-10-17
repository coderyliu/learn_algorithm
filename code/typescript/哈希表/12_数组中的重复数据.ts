// https://leetcode.cn/problems/find-all-duplicates-in-an-array/description/

function findDuplicates(nums: number[]): number[] {
  // 方法一：借助哈希表
  // *时间复杂度：O(n)
  // *空间复杂度：O(n)
  // const map = new Map<number, number>();
  // const res: number[] = [];
  // for (let i = 0; i < nums.length; i++) {
  //   map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  // }

  // for (const [key, value] of map) {
  //   if (value === 2) {
  //     res.push(key);
  //   }
  // }

  // return res;

  // 方法二：原地哈希
  // *时间复杂度：O(n)
  // *空间复杂度：O(1)
  const res: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) {
      res.push(index + 1);
    }
    nums[index] = -nums[index];
  }

  return res;
}

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDuplicates([1, 1, 2]));
console.log(findDuplicates([1]));

export {};
