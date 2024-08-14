/**
 * Filename: graph_dfs.js
 * CreateTime: 2024-08-13
 * Author: coderyliu
 */

const { GraphAdjList } = require("./graph_adjacency_list.js");
const { Vertex } = require("../modules/Vertex.js");

// 图的遍历 - 深度优先遍历(dfs)
// 使用邻接表来表示图，以便获取邻接顶点
const graphDFS = (graph, startVet) => {
  // 顶点遍历序列
  const res = [];
  // 哈希集合，用于记录已经访问过的顶点
  const visited = new Set();
  // 深度优先遍历
  const dfs = (graph, vet, res, visited) => {
    res.push(vet); // 记录访问的顶点
    visited.add(vet); // 标记该顶点已被访问
    // 遍历该顶点的所有邻接点
    for (const adjVet of graph.adjList.get(vet) ?? []) {
      if (visited.has(adjVet)) {
        continue;
      }

      // 递归遍历所有邻接点
      dfs(graph, adjVet, res, visited);
    }
  };
  dfs(graph, startVet, res, visited);

  return res;
};

/* Driver Code */
/* 初始化无向图 */
const v = Vertex.valsToVets([0, 1, 2, 3, 4, 5, 6]);
const edges = [
  [v[0], v[1]],
  [v[0], v[3]],
  [v[1], v[2]],
  [v[2], v[5]],
  [v[4], v[5]],
  [v[5], v[6]]
];
const graph = new GraphAdjList(edges);
console.log("\n初始化后，图为");
graph.print();

/* 深度优先遍历 */
const res = graphDFS(graph, v[0]);
console.log("\n深度优先遍历（DFS）顶点序列为");
console.log(Vertex.vetsToVals(res));
