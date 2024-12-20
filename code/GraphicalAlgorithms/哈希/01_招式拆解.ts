// 某套连招动作记作序列 arr，其中 arr[i] 为第 i 个招式的名字。请返回 arr 中最多可以出连续不重复的多少个招式。

// *本质上来说这道题就是求最长连续不重复子序列的长度

// 示例：
// 输入: arr = "dbascDdad"
// 输出: 6
// 解释: 因为连续且最长的招式序列是 "dbascD" 或 "bascDd"，所以其长度为 6。

function dismantlingAction(arr: string): number {
  // 方法一：哈希 + 双指针
  // * 时间复杂度：O(n)
  // * 空间复杂度：O(n)
  const map = new Map<string, number>();
  let l: number = 0;
  let r: number = 0;
  let maxLen: number = 0;
  while (r < arr.length) {
    if (map.has(arr[r]) && map.get(arr[r])! >= l) {
      l = map.get(arr[r])! + 1;
    }
    maxLen = Math.max(maxLen, r - l + 1);
    map.set(arr[r], r);
    r++;
  }
  return maxLen;
}

console.log(dismantlingAction("dbascDdad")); // 6

export {};
