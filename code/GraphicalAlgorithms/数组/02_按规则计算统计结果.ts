// 为了深入了解这些生物群体的生态特征，你们进行了大量的实地观察和数据采集。
// 数组 arrayA 记录了各个生物群体数量数据，其中 arrayA[i] 表示第 i 个生物群体的数量。
// 请返回一个数组 arrayB，该数组为基于数组 arrayA 中的数据计算得出的结果，其中 arrayB[i] 表示将第 i 个生物群体的数量从总体中排除后的其他数量的乘积。

function statisticalResult(arrayA: number[]): number[] {
  // 方法一：暴力
  // * 时间复杂度O(n^2)
  // * 空间复杂度O(n)
  const arr: number[] = [];
  const mulTotal = arrayA.reduce((pre, cur) => pre * cur, 1);
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] === 0) {
      const res = arrayA
        .filter((num, index) => index !== i)
        .reduce((pre, cur) => pre * cur, 1);
      arr.push(res);
    } else {
      arr.push(mulTotal / arrayA[i]);
    }
  }

  return arr;
}

// statisticalResult([1, 2, 0, 4, 5]) // 例外有0

export {};