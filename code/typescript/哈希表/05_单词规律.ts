// 给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。
// 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 s 中的每个非空单词之间存在着双向连接的对应规律。

function wordPattern(pattern: string, s: string): boolean {
  // 方法一：遍历字符串数组，判断每个元素第一次出现的位置是否相同
  // const strArr = s.split(" ");
  // if (strArr.length !== pattern.length) return false;
  // for (let i = 0; i < pattern.length; i++) {
  // 通过比较同一索引的元素第一次出现的位置是否相同，判断其是否遵循了同构规律，无论新元素还是重复出现的元素，如果其遵循了相同的规律，其第一次出现的位置都是相同的
  //   if (strArr.indexOf(strArr[i]) !== pattern.indexOf(pattern[i])) {
  //     return false;
  //   }
  // }

  // return true;

  // 方法二：使用哈希表存储每个字符和字符串对应关系，判断哈希表是否相等
  const strArr = s.split(" ");
  if (strArr.length !== pattern.length) return false;
  const pMap = new Map();
  const sMap = new Map();
  for (let i = 0; i < pattern.length; i++) {
    const pValue = pMap.get(pattern[i]);
    const sValue = sMap.get(strArr[i]);
    if ((pValue && pValue !== strArr[i]) || (sValue && sValue !== pattern[i])) {
      return false;
    }
    pMap.set(pattern[i], strArr[i]);
    sMap.set(strArr[i], pattern[i]);
  }
  return true;
}

export {};
