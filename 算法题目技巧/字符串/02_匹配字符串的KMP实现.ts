function strStr(needle: string, haystack: string): number {
  // 前缀表不删减也不移动
  function getNext(needle: string): number[] {
    let next: number[] = [];
    let j: number = 0; //j表示前缀开始位置
    next.push(j); //j=0无相等前后缀
    // i表示后缀开始的位置
    for (let i = 1; i < needle.length; i++) {
      // 前后缀不相等
      while (j > 0 && needle[i] !== needle[j]) {
        j = next[j - 1];
      }
      // 前后缀相等
      if (needle[i] === needle[j]) {
        j++;
      }
      next.push(j);
    }
    return next;
  }
  if (needle.length === 0) return 0;
  let next = getNext(needle);
  console.log(next);
  let j: number = 0;
  for (let i = 0; i < haystack.length; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1];
    }
    if (haystack[i] === needle[j]) {
      if (j === needle.length - 1) {
        return i - j;
      }
      j++;
    }
  }
  return -1;
}

console.log(strStr("aabaaf", "aabaabaaf"));
