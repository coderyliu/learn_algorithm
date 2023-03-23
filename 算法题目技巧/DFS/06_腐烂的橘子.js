// https://leetcode.cn/problems/rotting-oranges/?plan=leetcode_75&plan_progress=gty1ops

/**
 * @param {number[][]} grid
 * @return {number}
 */
// ?广度优先遍历
var orangesRotting = function (grid) {
  // todo 首先双重循环遍历整个矩阵，找出腐烂的橘子和好的橘子
  const row = grid.length
  const col = grid[0].length
  const queue = [] //烂橘子坐标的队列
  let goodNum = 0 //好橘子数量

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // 将所有烂橘子的坐标加入队列
      if (grid[i][j] === 2) {
        queue.push([i, j])
      }

      // 统计好橘子的数量 
      if (grid[i][j] === 1) {
        goodNum++
      }
    }
  }

  // 如果此时已经没有了好橘子，直接返回0
  if (goodNum === 0) return 0

  // 用于遍历上下左右的辅助数组
  const dx = [0, 0, -1, 1]
  const dy = [1, -1, 0, 0]

  // 记录腐烂坏橘子的次数
  let count = 0

  // todo 遍历队列中的坐标，取出队首元素，遍历上下左右坐标
  // 如果是烂橘子就加入队列，好橘子就将其腐烂
  while (queue.length) {
    const size = queue.length
    count++
    for (let i = 0; i < size; i++) {
      // 取出队首元素
      const cur = queue.shift()

      // 四个方向，所以遍历四次
      for (let j = 0; j < 4; j++) {
        // 计算当前遍历的元素的坐标
        const x = cur[0] + dx[j]
        const y = cur[1] + dy[j]
        // 如果当前坐标超出了边界，或者当前坐标的元素不是好橘子，则进行下一次循环
        if (x < 0 || y < 0 || x >= row || y >= col || grid[x][y] !== 1) continue

        // 否则说明当前是好橘子，将其腐烂，加入队列
        grid[x][y] = 2
        queue.push([x, y])

        // 然后将好橘子的数量减1
        goodNum--
      }
    }
  }

  // todo 遍历完成后，如果还有好橘子，就返回-1,否则返回烂橘子的次数count
  return goodNum > 0 ? -1 : count - 1
  // 为什么返回 count -1 ?
  // count 相当于树的层数, 假设有一个根节点, 它的子节点为所有腐烂的橘子
  // 然后每个腐烂的橘子的子节点就是它的4个方向的橘子, 生成这个树的过程就是腐烂橘子的过程
  // 这个数的深度也就是腐
};