function searchMatrix(matrix: number[][], target: number): boolean {
  // 方法一：暴力遍历 O(m*n)

  // 方法二：二分查找：左闭右闭 O(log(m*n))
  const res: number[] = matrix.flat();
  let l = 0;
  let r = res.length - 1;
  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);
    if (res[mid] > target) {
      r = mid - 1;
    } else if (res[mid] < target) {
      l = mid + 1;
    } else {
      return true;
    }
  }

  return false;
}

export {};
