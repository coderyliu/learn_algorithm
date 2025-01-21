// 给你两个下标从 0 开始的整数数组 nums1 和 nums2 ，请你返回一个长度为 2 的列表 answer ，其中：
// answer[0] 是 nums1 中所有 不 存在于 nums2 中的 不同 整数组成的列表。
// answer[1] 是 nums2 中所有 不 存在于 nums1 中的 不同 整数组成的列表。
// 注意：列表中的整数可以按 任意 顺序返回。

function findDifference(nums1: number[], nums2: number[]): number[][] {
  // 方法：哈希
  // * 时间复杂度O(2n)
  // * 空间复杂度O(2n)
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const arr1: number[] = [];
  const arr2: number[] = [];
  for (const num of nums1) {
    if (!set2.has(num)) {
      arr1.push(num);
    }
  }

  for (const num of nums2) {
    if (!set1.has(num)) {
      arr2.push(num);
    }
  }

  return [[...new Set(arr1)], [...new Set(arr2)]];
}

export {};
