/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // 简单粗暴
  // nums1.splice(m, n, ...nums2);
  // nums1.sort((a, b) => a - b);

  // 归并排序 - 合并两个有序的数组
  nums1.splice(m, n, ...nums2);
  const merge = (left: number[], right: number[]) => {
    const res: number[] = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        res.push(left.shift() as number);
      } else {
        res.push(right.shift() as number);
      }
    }

    while (left.length) {
      res.push(left.shift() as number);
    }

    while (right.length) {
      res.push(right.shift() as number);
    }

    return res;
  };
  const mergeSort = (num: number[]) => {
    if (num.length <= 1) return num;
    const middle = Math.floor(num.length / 2);
    return merge(mergeSort(num.slice(0, middle)), mergeSort(num.slice(middle)));
  };
  const ret = mergeSort(nums1);
  nums1.splice(0, nums1.length, ...ret);
}

export {};
