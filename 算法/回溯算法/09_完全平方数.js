/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  // BFS思想
  let queue = [n]
  let level = 0
  let visited = {}

  while (queue.length > 0) {
    level++
    for (let i = 0, len = queue.length; i < len; i++) {
      const cur = queue.shift()
      for (let j = 1; j * j <= cur; j++) {
        let tmp = cur - j * j
        if (tmp === 0) return level
        if (!visited[tmp]) {
          visited[tmp] = true
          queue.push(tmp)
        }
      }
    }
  }
};