function isSubsequence(s: string, t: string): boolean {
  // 双指针
  let l = 0;
  let r = 0;
  while (r < t.length) {
    if (s[l] === t[r]) {
      l++;
    }
    r++;
  }

  return l === s.length;
}

export {};
