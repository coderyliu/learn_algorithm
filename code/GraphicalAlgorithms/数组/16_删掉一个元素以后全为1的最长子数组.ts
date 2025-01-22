// 给你一个二进制数组 nums ，你需要从中删掉一个元素。
// 请你在删掉元素的结果数组中，返回最长的且只包含 1 的 非空 子数组的长度。
// 如果不存在这样的子数组，请返回 0 。

function longestSubarray(nums: number[]): number {
  // 方法： 筛选所有为0的值，计算每个0值与其左右相邻的0之间1的数目之和，取其中最大值就是题目答案。再排除一切特殊情况就得到完整代码逻辑。
  // * 时间复杂度：O(n)
  // * 空间复杂度：O(n)
  const zeroIndex: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroIndex.push(i);
    }
  }

  if (zeroIndex.length === 0 || zeroIndex.length === 1) return nums.length - 1;

  let max = 0;
  for (let i = 0; i < zeroIndex.length; i++) {
    if (i === 0) {
      max = Math.max(max, zeroIndex[i + 1] - 1);
    } else if (i === zeroIndex.length - 1) {
      max = Math.max(
        max,
        ((zeroIndex[i] - zeroIndex[i - 1] - 1) + (nums.length - zeroIndex[i] - 1))
      );
    } else {
      max = Math.max(
        max,
        (zeroIndex[i + 1] - zeroIndex[i] - 1) +
          (zeroIndex[i] - zeroIndex[i - 1] - 1)
      );
    }
  }

  return max;
}

console.log(longestSubarray([1, 1, 0, 1])); // 3
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])); // 5
console.log(longestSubarray([1, 1, 1])); // 2
console.log(longestSubarray([1, 1, 0, 0, 1, 1, 1, 0, 1])); // 4

export {};
