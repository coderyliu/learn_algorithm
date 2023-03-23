// 快速排序，quick sort
// 快速排序的思想是分治法 ，选一个基数，选出比这个基数小的放在左边，大的放在右边
// 之后递归，依次对这个基数左右两边的数递归

const quickSort = function (arr: number[]): number[] {
  console.time("2.快速排序耗时");
  if (arr.length <= 1) {
    return arr;
  }
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIndex, 1)[0];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  console.timeEnd("2.快速排序耗时");
  return quickSort(left).concat([pivot], quickSort(right));
};

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(quickSort(arr));
export {};
