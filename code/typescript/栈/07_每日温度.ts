// https://leetcode.cn/problems/daily-temperatures/description/

function dailyTemperatures(temperatures: number[]): number[] {
  // 方法一：暴力解法 - O(n^2) - 超时
  // const res: number[] = Array(temperatures.length).fill(0);
  // for (let i = 0; i < temperatures.length; i++) {
  //   for (let j = i + 1; j < temperatures.length; j++) {
  //     if (temperatures[j] > temperatures[i]) {
  //       res[i] = j - i;
  //       break;
  //     }
  //   }
  // }

  // return res;

  // 方法二：单调栈
  const stack: number[] = [];
  const res: number[] = Array(temperatures.length).fill(0);
  // 遍历每日温度，维护一个单调栈
  for (let i = 0; i < temperatures.length; i++) {
    // 当日温度大于栈顶温度，说明栈顶温度的升温日找到了，栈顶出栈并计算天数；继续判断栈顶元素
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const index = stack.pop()!;
      res[index] = i - index;
    }
    // 栈为空 或 每日温度小于等于栈顶温度 => 直接入栈
    stack.push(i);
  }
  return res;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([30, 40, 50, 60]));
console.log(dailyTemperatures([30, 60, 90]));

export {};
