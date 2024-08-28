function lengthOfLongestSubstring(s: string): number {
  // 滑动窗口 + 哈希
  let l = 0;
  let r = 0;
  let res = 0;
  const map = new Map();
  while (r < s.length) {
    if (map.has(s[r]) && l <= map.get(s[r])) {
      l = map.get(s[r]) + 1;
    }
    map.set(s[r], r);
    res = Math.max(res, r - l + 1);
    r++;
  }

  return res;
}

export {};
