function twoSum(numbers: number[], target: number): number[] {
  // 方法一：暴力 - O(n^2)
  // for (let i = 0; i < numbers.length; i++) {
  //   for (let j = i + 1; j < numbers.length; j++) {
  //     if (numbers[i] + numbers[j] === target) {
  //       return [i + 1, j + 1];
  //     }
  //   }
  // }

  // return [];

  // 方法二：双指针 - O(n)
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}

export {};
