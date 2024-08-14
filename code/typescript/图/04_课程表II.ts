// 现在你总共有 numCourses 门课需要选，记为 0 到 numCourses - 1。
// 给你一个数组 prerequisites ，其中 prerequisites[i] = [ai, bi] ，表示在选修课程 ai 前必须先选修 bi 。
// 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示：[0,1] 。
// 返回你为了学完所有课程所安排的学习顺序。可能会有多个正确的顺序，你只要返回任意一种就可以了。如果不可能完成所有课程，返回一个空数组 。

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  // ?实现方式同课程表
  // 1. 先把prerequisites的依赖关系用有向图表示出来,通过顶点的入度来分析
  // 2. 拓扑排序

  const inDegree: number[] = new Array(numCourses).fill(0);
  const map = {}; // 用邻接表来表示图
  for (let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++; // 顶点的初始入度
    if (map[prerequisites[i][1]]) {
      map[prerequisites[i][1]].push(prerequisites[i][0]); // 添加依赖它的后续课
    } else {
      map[prerequisites[i][1]] = [prerequisites[i][0]]; // 添加依赖它的后续课
    }
  }

  // BFS 拓扑排序
  const queue: number[] = [];
  // 初始入度为 0 的顶点入队
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  let count = 0; // 出队的顶点的个数
  const res: number[] = []; // 学习课程的顺序

  while (queue.length) {
    const selected = queue.shift(); // 出队选择学习的课程
    count++;
    res.push(selected as number);
    const toEnQueue = map[selected as number]; // 获取这门课的后续课
    if (toEnQueue && toEnQueue.length) {
      // 遍历后续课，入度 -1
      for (let i = 0; i < toEnQueue.length; i++) {
        inDegree[toEnQueue[i]]--;
        if (inDegree[toEnQueue[i]] === 0) queue.push(toEnQueue[i]);
      }
    }
  }

  return count === numCourses ? res : [];
}

export {};
