// 整数数组 sockets 记录了一个袜子礼盒的颜色分布情况，其中 sockets[i] 表示该袜子的颜色编号。
// 礼盒中除了一款撞色搭配的袜子，每种颜色的袜子均有两只。
// 请设计一个程序，在时间复杂度 O(n)，空间复杂度O(1) 内找到这双撞色搭配袜子的两个颜色编号。

// 示例 1：
// 输入：sockets = [4, 5, 2, 4, 6, 6]
// 输出：[2, 5]

function sockCollocation(sockets: number[]): number[] {
  // 方法：哈希
  // *时间复杂度：O(n)
  // *空间复杂度：O(n)
  const map = new Map<number, number>();
  const res: number[] = [];
  for (const socket of sockets) {
    map.set(socket, (map.get(socket) || 0) + 1);
  }

  for (const [key, value] of map.entries()) {
    if (value === 1) {
      res.push(key);
    }
  }
  return res;
}

export {};
