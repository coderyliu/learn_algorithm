// 给你一个整数数组 nums ，判断这个数组中是否存在长度为 3 的递增子序列。
// 如果存在这样的三元组下标 (i, j, k) 且满足 i < j < k ，使得 nums[i] < nums[j] < nums[k] ，返回 true ；否则，返回 false 。

// 示例 1：
// 输入：nums = [1,2,3,4,5]
// 输出：true
// 解释：任何 i < j < k 的三元组都满足题意

// 示例 2：
// 输入：nums = [5,4,3,2,1]
// 输出：false
// 解释：不存在满足题意的三元组

// 示例 3：
// 输入：nums = [2,1,5,0,4,6]
// 输出：true
// 解释：三元组 (3, 4, 5) 满足题意，因为 nums[3] == 0 < nums[4] == 4 < nums[5] == 6

// 进阶：你能实现时间复杂度为 O(n) ，空间复杂度为 O(1) 的解决方案吗？

function increasingTriplet(nums: number[]): boolean {
  // 方法一：暴力
  // * 时间复杂度：O(n^3)
  // * 空间复杂度：O(1)
  // const len = nums.length;
  // if (len < 3) return false;
  // for (let i = 0; i < len; i++) {
  //   for (let j = i + 1; j < len; j++) {
  //     for (let k = j + 1; k < len; k++) {
  //       if (nums[i] < nums[j] && nums[j] < nums[k]) {
  //         return true;
  //       }
  //     }
  //   }
  // }
  // return false;

  // 方法二：只要满足当前值大于左边最小值，并且小于右边最大值，就返回 true
  // * 时间复杂度：O(n)
  // * 空间复杂度：O(1)
  const len = nums.length;
  if (len < 3) return false;
  let min = nums[0];
  let max = Infinity;
  for (let i = 1; i < len; i++) {
    // 如果当前值大于 max，则说明找到了递增的三元组
    if (nums[i] > max) {
      return true;
    } else if (nums[i] > min) {
      // 如果当前值大于 min，则更新 max
      max = nums[i];
    } else {
      // 如果当前值小于 min，则更新 min
      min = nums[i];
    }
  }
  return false;
}

console.log(increasingTriplet([1, 2, 3, 4, 5])); // true
console.log(increasingTriplet([5, 4, 3, 2, 1])); // false
console.log(increasingTriplet([2, 1, 5, 0, 4, 6])); // true

export {};
