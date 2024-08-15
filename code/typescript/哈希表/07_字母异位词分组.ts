// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
// 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。

function groupAnagrams(strs: string[]): string[][] {
  // 方法：将所有的单词排序后，遍历比较
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    let key = strs[i].split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, [strs[i]]);
    } else {
      map.get(key).push(strs[i]);
    }
  }

  return Array.from(map.values());
}

const res = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(res);

export {};
