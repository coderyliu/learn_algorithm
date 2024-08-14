/**
 * Filename: graph_adjacency_list.js
 * CreateTime: 2024-08-13
 * Author: coderyliu
 */

const { Vertex } = require("../modules/Vertex.js");

// 基于邻接表实现的无向图
class GraphAdjList {
  // 邻接表， key:顶点， value: 该顶点的所有邻接顶点
  adjList;

  constructor(edges) {
    this.adjList = new Map(); // 初始化邻接表，基于Map实现
    // 添加所有的顶点和边
    for (const edge of edges) {
      this.addVertex(edge[0]);
      this.addVertex(edge[1]);
      this.addEdge(edge[0], edge[1]);
    }
  }

  // 获取顶点的数量
  size() {
    return this.adjList.size;
  }

  // 添加顶点
  addVertex(vet) {
    if (this.adjList.has(vet)) return;
    this.adjList.set(vet, []);
  }

  // 删除顶点
  removeVertex(vet) {
    if (!this.adjList.has(vet)) return;
    // 在邻接表中删除顶点 vet 对应的链表
    this.adjList.delete(vet);
    // 删除顶点vet的所有邻接顶点
    for (const [key, value] of this.adjList) {
      if (value.indexOf(vet) > -1) value.splice(value.indexOf(vet), 1);
    }
  }

  // 添加边
  addEdge(vet1, vet2) {
    if (!this.adjList.has(vet1) || !this.adjList.has(vet2)) {
      throw new Error("vet1 or vet2 is not in the graph!");
    }
    // 添加边vet1 - vet2
    this.adjList.get(vet1).push(vet2);
    this.adjList.get(vet2).push(vet1);
  }

  // 删除边
  removeEdge(vet1, vet2) {
    if (!this.adjList.has(vet1) || !this.adjList.has(vet2) || vet1 === vet2) {
      throw new Error("vet1 or vet2 is not in the graph!");
    }
    // 删除边vet1 - vet2
    this.adjList.get(vet1).splice(this.adjList.get(vet1).indexOf(vet2), 1);
    this.adjList.get(vet2).splice(this.adjList.get(vet2).indexOf(vet1), 1);
  }

  // 打印邻接表
  print() {
    console.log("邻接表 =");
    for (const [key, value] of this.adjList) {
      const tmp = [];
      for (const vertex of value) {
        tmp.push(vertex.val);
      }
      console.log(key.val + ": " + tmp.join());
    }
  }
}

/* Driver Code */
/* 初始化无向图 */
const v0 = new Vertex(1),
  v1 = new Vertex(3),
  v2 = new Vertex(2),
  v3 = new Vertex(5),
  v4 = new Vertex(4);
const edges = [
  [v0, v1],
  [v1, v2],
  [v2, v3],
  [v0, v3],
  [v2, v4],
  [v3, v4]
];
const graph = new GraphAdjList(edges);
console.log("\n初始化后，图为");
graph.print();

/* 添加边 */
// 顶点 1, 2 即 v0, v2
graph.addEdge(v0, v2);
console.log("\n添加边 1-2 后，图为");
graph.print();

/* 删除边 */
// 顶点 1, 3 即 v0, v1
graph.removeEdge(v0, v1);
console.log("\n删除边 1-3 后，图为");
graph.print();

/* 添加顶点 */
const v5 = new Vertex(6);
graph.addVertex(v5);
console.log("\n添加顶点 6 后，图为");
graph.print();

/* 删除顶点 */
// 顶点 3 即 v1
graph.removeVertex(v1);
console.log("\n删除顶点 3 后，图为");
graph.print();

module.exports = {
  GraphAdjList
};
