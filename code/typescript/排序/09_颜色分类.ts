// https://leetcode.cn/problems/sort-colors/

/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  // 方法一：提取颜色 - O(n)
  // const zero: number[] = [];
  // const one: number[] = [];
  // const two: number[] = [];
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === 0) {
  //     zero.push(nums[i]);
  //   } else if (nums[i] === 1) {
  //     one.push(nums[i]);
  //   } else {
  //     two.push(nums[i]);
  //   }
  // }

  // nums.splice(0, nums.length, ...zero, ...one, ...two);

  // 方法二：使用内置函数sort - O(nlogn)
  // nums.sort((a, b) => a - b);

  // 方法三：快排 - O(logn)

  // 方法四：双指针 - O(n)
  let l = 0;
  let r = nums.length - 1;
  let idx = 0;
  while (idx <= r) {
    if (nums[idx] === 0) {
      swap(nums, l++, idx++);
    } else if (nums[idx] === 1) {
      idx++;
    } else {
      swap(nums, idx, r--);
    }
  }
}

function swap(nums: number[], i: number, j: number) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}

console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 1]));

export {};
