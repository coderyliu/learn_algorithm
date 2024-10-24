// https://leetcode.cn/problems/sort-array-by-parity/

function sortArrayByParity(nums: number[]): number[] {
  // 方法一：暴力
  // *时间复杂度：O(n)
  // *空间复杂度：O(n)
  // const even: number[] = [];
  // const odd: number[] = [];
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] % 2 === 0) {
  //     even.push(nums[i]);
  //   } else {
  //     odd.push(nums[i]);
  //   }
  // }

  // return [...even, ...odd];

  // 方法二：双指针
  // *时间复杂度：O(n)
  // *空间复杂度：O(1)
  let left: number = 0;
  let right: number = nums.length - 1;
  while (left <= right) {
    if (nums[left] % 2 === 0) {
      left++;
    } else {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      right--;
    }
  }

  return nums;
}

console.log(sortArrayByParity([3, 1, 2, 4]));
console.log(sortArrayByParity([0]));

export {};
