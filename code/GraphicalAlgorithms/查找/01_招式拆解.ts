// 某套连招动作记作仅由小写字母组成的序列 arr，其中 arr[i] 第 i 个招式的名字。
// 请返回第一个只出现一次的招式名称，如不存在请返回空格。

function dismantlingAction(arr: string): string {
  // 方法：使用哈希表
  // * 时间复杂度：O(n)
  // * 空间复杂度：O(n)
  const map = new Map<string, number>();
  for (const s of arr) {
    map.set(s, (map.get(s) || 0) + 1);
  }
  // 遍历哈希表，找到第一个只出现一次的招式
  // * 哈希表的遍历顺序是按照插入顺序的
  // for (const [key, value] of map.entries()) {
  //   if (value === 1) return key;
  // }

  for (const s of arr) {
    if (map.get(s) === 1) return s;
  }
  return " ";
}

export {};
