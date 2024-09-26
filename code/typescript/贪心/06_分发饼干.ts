// https://leetcode.cn/problems/assign-cookies/

function findContentChildren(g: number[], s: number[]): number {
  // 暴力 - 超时 - 时间复杂度O(n^2)
  let child = 0;
  // 排序 - 时间复杂度O(nlogn)
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  for (let i = 0; i < s.length; i++) {
    const idx = g.findIndex((item) => item <= s[i]);
    if (idx !== -1) {
      child++;
      g.splice(idx, 1);
    }
  }

  return child;
}

// 贪心 - 时间复杂度O(n)
function findContentChildrenTwo(g: number[], s: number[]): number {
  // 局部最优：大饼干喂给胃口大的孩子
  // 全局最优：喂饱尽可能多的孩子
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let child = 0;
  let idx = s.length - 1;
  for (let i = g.length - 1; i >= 0; i--) {
    if (idx >= 0 && s[idx] >= g[i]) {
      child++;
      idx--;
    }
  }

  return child;
}
console.log(findContentChildren([1, 2, 3], [1, 1]));
console.log(findContentChildren([1, 2], [1, 2, 3]));

export {};
