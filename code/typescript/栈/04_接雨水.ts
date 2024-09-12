// https://leetcode.cn/problems/trapping-rain-water/solutions/2626622/leetcode-42-jie-yu-shui-1-dan-diao-zhan-f0v1o/

function trap(height: number[]): number {
  // ?方法：单调递减栈 - O(n)
  // 1. 声明一个单调递减栈
  let res: number = 0;
  const stack: number[] = [];

  // 2. 遍历柱子，维护这个单调栈
  for (let i = 0; i < height.length; i++) {
    // 2.1 如果栈不为空，且栈顶元素 < 当前柱顶元素的高度，说明可以形成水坑
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop() as number;
      if (!stack.length) break;

      // 2.2 计算水坑面积
      const left = stack[stack.length - 1];
      const currentWidth = i - left - 1;
      const currentHeight = Math.min(height[i], height[left]) - height[top];
      res += currentWidth * currentHeight;
    }

    // 2.3 放入单调栈
    stack.push(i);
  }

  return res;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));

export {};
