function strStr(haystack: string, needle: string): number {
  // 方法一：简单利用js-API
  // return haystack.indexOf(needle);

  // 方法二：滑动窗口
  let l = 0;
  let r = needle.length - 1;

  while (r < haystack.length) {
    const str = haystack.slice(l, r + 1);
    if (str === needle) return l;
    l++;
    r++;
  }

  return -1;

  // 方法三：KMP
  // TODO
}

export {};
