class Graphs {
  constructor() {
    this.adjecentList = {};
  }

  addVertex(vertex) {
    this.adjecentList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjecentList[vertex1].push(vertex2);
    this.adjecentList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjecentList[vertex1] =  this.adjecentList[vertex1].filter(vertex => vertex !== vertex2);
    this.adjecentList[vertex2] =  this.adjecentList[vertex2].filter(vertex => vertex !== vertex1);
  }

  removeVertex(vertex) {
    for (let con of this.adjecentList[vertex]) {
      this.removeEdge(vertex, con);
    }
    delete this.adjecentList[vertex];
  }

  dfs(vertex) {
    vertex = vertex ?? '';
    if (!vertex.trim().length) return undefined;

    let track = {};
    let result = [];

    let helper = (v) => {
      if (!this.adjecentList[v]) return undefined;
      track[v] = true;
      result.push(v);
      this.adjecentList[v].forEach(v2 => {
        if (!track[v2]) helper(v2);
      });
    }

    helper(vertex);
    return result;
  }
}

const g = new Graphs();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

// console.log(g.adjecentList);

// g.removeEdge('A', 'B');

// console.log(g.adjecentList);

// g.removeVertex('A');
// g.removeVertex('E');

// console.log(g.adjecentList);

// traverse all vertises
console.log('DFS:', g.dfs('A'));