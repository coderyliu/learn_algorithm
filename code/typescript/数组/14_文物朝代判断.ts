// https://leetcode.cn/problems/bu-ke-pai-zhong-de-shun-zi-lcof/description/

function isStraight(places: number[]): boolean {
  // 方法：排序 + 遍历 + 哈希
  const set = new Set(places);
  let zeroCount = places.filter((n) => n === 0).length;
  if (zeroCount === 0 && set.size !== places.length) return false;
  if (zeroCount !== 0 && set.size + zeroCount - 1 !== places.length)
    return false;
  // 过滤掉0，并排序
  places = places.filter((n) => n !== 0).sort((a, b) => a - b);

  let min = places[0];
  for (let i = 1; i < places.length; i++) {
    if (places[i] === min + 1) {
      min = places[i];
      continue;
    }
    zeroCount -= places[i] - min - 1;
    if (zeroCount < 0) return false;
    min = places[i];
  }

  return true;
}

console.log(isStraight([0, 6, 9, 0, 7]));
console.log(isStraight([7, 8, 9, 10, 11]));

export {};
