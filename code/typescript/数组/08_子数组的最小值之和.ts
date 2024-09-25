// https://leetcode.cn/problems/sum-of-subarray-minimums/description/

function sumSubarrayMins(arr: number[]): number {
  // 方法一：暴力 - 超时 - 时间复杂度 O(n^2)
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    for (let j = i; j < arr.length; j++) {
      min = Math.min(min, arr[j]);
      res += min;
    }
  }
  return res;
}

// 方法二：单调栈 - 时间复杂度 O(n)
function sumSubarrayMinsTwo(arr: number[]): number {
  const MOD = 1e9 + 7;
  const n = arr.length;
  // 初始化 left 数组，用于存储每个元素作为最小值的左边界
  const left = new Array(n).fill(0);
  // 初始化 right 数组，用于存储每个元素作为最小值的右边界
  const right = new Array(n).fill(0);
  // 初始化一个栈，用于维护元素索引的单调顺序
  const stack: number[] = [];

  // 计算左边界
  for (let i = 0; i < n; i++) {
    while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop();
    }
    left[i] = stack.length ? i - stack[stack.length - 1] : i + 1;
    stack.push(i);
  }

  stack.length = 0; // 清空栈以便重用

  // 计算右边界
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    right[i] = stack.length ? stack[stack.length - 1] - i : n - i;
    stack.push(i);
  }

  // 计算结果
  let res = 0;
  for (let i = 0; i < n; i++) {
    // 计算每个元素作为最小值的贡献，并累加到结果中
    res = (res + arr[i] * left[i] * right[i]) % MOD;
  }

  return res;
}

console.log(sumSubarrayMins([3, 1, 2, 4])); // 17
console.log(sumSubarrayMins([11, 81, 94, 43, 3])); // 444
console.log(sumSubarrayMinsTwo([3, 1, 2, 4])); // 17
console.log(sumSubarrayMinsTwo([11, 81, 94, 43, 3])); // 444

export {};
