// 给你一个整数数组 nums ，请计算数组的 中心下标 。
// 数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。
// 如果数组不存在中心下标，返回 -1 。如果数组有多个中心下标，应该返回最靠近左边的那一个。
// 注意，中心下标可能出现在数组的两端。

function pivotIndex(nums: number[]): number {
  // 方法一：暴力 - 计算左右两侧的和
  // * 时间复杂度：O(n^2)
  // * 空间复杂度：O(1)
  for (let i = 0; i < nums.length; i++) {
    const leftSum = nums.slice(0, i).reduce((a, b) => a + b, 0);
    const rightSum = nums.slice(i + 1).reduce((a, b) => a + b, 0);
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([1, 2, 3])); // -1
console.log(pivotIndex([2, 1, -1])); // 0

export {};
