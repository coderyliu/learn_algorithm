// https://leetcode.cn/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/

function exchange(nums: number[]): number[] {
  // 方法一：暴力
  // * 时间复杂度：O(n)
  // * 空间复杂度：O(n)
  // const even: number[] = [];
  // const odd: number[] = [];
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] % 2 === 0) {
  //     even.push(nums[i]);
  //   } else {
  //     odd.push(nums[i]);
  //   }
  // }

  // return [...odd, ...even];

  // 方法二：双指针
  // * 时间复杂度：O(n)
  // * 空间复杂度：O(1)
  const len = nums.length;
  let left = 0;
  let right = len - 1;
  while (left < right) {
    if (nums[left] % 2 !== 0) {
      left++;
    } else {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      right--;
    }
  }

  return nums;
}

console.log(exchange([1, 2, 3, 4, 5]));
console.log(exchange([1, 3, 5, 7, 2, 4, 6]));

export {};
