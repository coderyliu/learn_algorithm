// 763. 划分字母区间
// 给你一个字符串 s 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。
// 注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 s 。
// 返回一个表示每个字符串片段的长度的列表。

function partitionLabels(s: string): number[] {
  // 1. 遍历字符串，记录每个字符最后出现的位置
  const hash: Record<string, number> = {};
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = i;
  }

  const res: number[] = [];
  let left = 0;
  let right = 0;
  // 2. 从头遍历字符串，并更新字符的最远出现下标，如果找到字符最远出现下标和当前下标相等，则找到了一个片段
  for (let i = 0; i < s.length; i++) {
    // 更新字符的最远出现下标
    right = Math.max(right, hash[s[i]]);
    // 如果找到字符最远出现下标和当前下标相等，则找到了一个片段
    if (right === i) {
      res.push(right - left + 1);
      left = right + 1;
    }
  }
  return res;
}

console.log(partitionLabels("abac")); // [3, 1]
console.log(partitionLabels("eccbbbbdec")); // [10]
console.log(partitionLabels("ababcbacadefegdehijhklij")); // [9, 7, 8]

export {};
