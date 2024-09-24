// https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description/

function removeDuplicates(nums: number[]): number {
  // 双指针 - 快慢指针
  let l = 0;
  let r = 1;
  while (r < nums.length) {
    if (nums[l] !== nums[r]) {
      nums[l + 1] = nums[r];
      l++;
    }
    r++;
  }

  return l + 1;
}

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

export {};
