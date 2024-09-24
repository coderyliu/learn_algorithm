// https://leetcode.cn/problems/number-of-provinces/

function findCircleNum(isConnected: number[][]): number {
  // 方法一： 暴力
  const len = isConnected.length;
  let res = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (isConnected[i][j] === 1 && i !== j) {
        res++;
      }
    }
  }

  return res;
}

console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]
  ])
);

export {};
