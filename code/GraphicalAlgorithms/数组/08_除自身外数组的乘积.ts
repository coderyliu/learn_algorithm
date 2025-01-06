// https://leetcode.cn/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=top-100-liked

function productExceptSelf(nums: number[]): number[] {
  // 方法一：暴力 - 使用除法
  // * 时间复杂度：O(n)
  // * 空间复杂度：O(n)
  // const mul = nums.reduce((a, b) => a * b, 1);
  // const res: number[] = [];
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === 0) {
  //     const mul = nums
  //       .filter((_, index) => index !== i)
  //       .reduce((a, b) => a * b, 1);
  //     res.push(mul);
  //   } else {
  //     res.push(mul / nums[i]);
  //   }
  // }
  // return res;

  // 方法二：前缀和后缀
  // * 时间复杂度：O(n)
  // * 空间复杂度：O(n)
  const n = nums.length;
  const res: number[] = [];
  let left = 1;
  let right = 1;
  // 前缀
  for (let i = 0; i < n; i++) {
    res[i] = left;
    left *= nums[i];
  }
  // 后缀
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= right;
    right *= nums[i];
  }
  return res;
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0, 0, 9, 0, 0]

export {};
