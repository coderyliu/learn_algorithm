// https://leetcode.cn/problems/repeated-dna-sequences/

function findRepeatedDnaSequences(s: string): string[] {
  // 滑动窗口 + 哈希
  const res: string[] = [];
  let l = 0;
  let r = 9;
  const map = new Map();
  while (r < s.length) {
    const str = s.slice(l, r + 1);
    if (map.has(str)) {
      map.set(str, map.get(str) + 1);
    } else {
      map.set(str, 1);
    }
    if (map.get(str) === 2) res.push(str);
    l++;
    r++;
  }

  return res;
}

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
console.log(
  findRepeatedDnaSequences(
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
  )
);

export {};
