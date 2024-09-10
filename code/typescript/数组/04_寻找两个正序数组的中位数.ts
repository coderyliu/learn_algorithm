// https://leetcode.cn/problems/median-of-two-sorted-arrays/

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // 归并排序
  const mergeSort = (num1: number[], num2: number[]): number[] => {
    const res: number[] = [];

    while (num1.length && num2.length) {
      if (num1[0] < num2[0]) {
        res.push(num1.shift() as number);
      } else {
        res.push(num2.shift() as number);
      }
    }

    while (num1.length) {
      res.push(num1.shift() as number);
    }

    while (num2.length) {
      res.push(num2.shift() as number);
    }

    return res;
  };

  const num = [...nums1, ...nums2];
  const merge = (num: number[]): number[] => {
    if (num.length === 1) return num;
    const mid = Math.floor(num.length / 2);
    const left = num.slice(0, mid);
    const right = num.slice(mid);

    return mergeSort(merge(left), merge(right));
  };

  const res = merge(num);
  const len = res.length;
  if (len % 2 === 0) {
    return (res[Math.floor(len / 2)] + res[Math.floor(len / 2) - 1]) / 2;
  } else {
    return res[Math.floor(len / 2)];
  }
}

console.log(findMedianSortedArrays([1, 3], [2]));

export {};
