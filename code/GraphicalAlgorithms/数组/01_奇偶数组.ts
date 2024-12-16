// 教练使用整数数组 actions 记录一系列核心肌群训练项目编号。
// 为增强训练趣味性，需要将所有奇数编号训练项目调整至偶数编号训练项目之前。请将调整后的训练项目编号以 数组 形式返回。

function trainingPlan(actions: number[]): number[] {
  // 方法一：暴力
  // *时间复杂度：O(n)
  // *空间复杂度：O(n)
  // const odd: number[] = [];
  // const even: number[] = [];
  // for (const num of actions) {
  //   if (num % 2 !== 0) {
  //     odd.push(num);
  //   } else {
  //     even.push(num);
  //   }
  // }
  // return [...odd, ...even];

  // 方法二：双指针
  // *时间复杂度：O(n)
  // *空间复杂度：O(1)
  let l: number = 0;
  let r: number = actions.length - 1;
  while (l < r) {
    if (actions[l] % 2 === 0) {
      [actions[l], actions[r]] = [actions[r], actions[l]];
      r--;
    } else {
      l++;
    }
  }
  return actions;
}

export {};
