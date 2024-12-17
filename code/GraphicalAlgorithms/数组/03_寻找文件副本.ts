// 设备中存有 n 个文件，文件 id 记于数组 documents。若文件 id 相同，则定义为该文件存在副本。请返回任一存在副本的文件 id。

function findRepeatDocument(documents: number[]): number {
  // 方法一：哈希
  // * 时间复杂度O(n)
  // * 空间复杂度O(n)
  const map = new Map();
  for (const doc of documents) {
    map.set(doc, (map.get(doc) || 0) + 1);
    if (map.get(doc) === 2) {
      return doc;
    }
  }
  return -1;

  // 方法二：摩尔投票
  // ! 前提：数组中一定存在一个出现次数超过一半的数字，才能使用摩尔投票
  // * 时间复杂度O(n)
  // * 空间复杂度O(1)
  // let candidate = -1;
  // let count = 0;
  // for (const doc of documents) {
  //   if (count === 0) {
  //     candidate = doc;
  //   }
  //   count += candidate === doc ? 1 : -1;
  // }
  // return candidate;
}

console.log(
  findRepeatDocument([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2,
    3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
  ])
);

export {};
