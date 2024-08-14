// 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。
// 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。
// 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
// 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  // 实现方式：拓扑排序(广度优先遍历)
  // 1. 根据 prerequisites  可以画一个图（有向图）,通过邻接表构建图
  // 2. 根据有向图可以看出每个顶点的入度
  // 3. 学习入度为 0 的课程，不需要依赖条件
  // 4. 学习完入度为 0 的课程之后，把依赖它的课的入度 -1，如果后续课程入度为 0 就可以学习了，以此循环此过程
  // 5. 如果搜索顶点的入度为0，说明没环，如果有环，则无法完成所有课程的学习

  const inDegree = new Array(numCourses).fill(0); // 有向图的顶点的入度
  const map = {}; // 通过邻接表表示图
  for (let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++; // 求课的初始入度
    if (map[prerequisites[i][1]]) {
      // 当前课已存在于邻接表
      map[prerequisites[i][1]].push(prerequisites[i][0]); // 添加依赖它的后续课
    } else {
      // 当前课不存在于邻接表
      map[prerequisites[i][1]] = [prerequisites[i][0]]; // 添加依赖它的后续课
    }
  }

  // 开始BFS
  const queue: number[] = [];
  let count = 0; // 选择课的数量
  // 入队列:度为 0 的课程
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  while (queue.length) {
    const selected = queue.shift(); // 当前选的课，出队列
    count++; // 选择课 +1
    const toEnQueue = map[selected as number]; //获取这门课的后续课
    if (toEnQueue && toEnQueue.length) {
      for (let i = 0; i < toEnQueue.length; i++) {
        // 依赖它的后续课入度 -1
        inDegree[toEnQueue[i]]--;
        if (inDegree[toEnQueue[i]] === 0) {
          // 如果减为 0 ，入队
          queue.push(toEnQueue[i]);
        }
      }
    }
  }

  return count === numCourses; // 选了课等于总课数为true 否则false
}

export {};
