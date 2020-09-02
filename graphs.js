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
}

const g = new Graphs();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('C', 'E');
g.addEdge('C', 'D');
g.addEdge('D', 'E');

console.log(g.adjecentList);

g.removeEdge('A', 'B');

console.log(g.adjecentList);

g.removeVertex('A');
g.removeVertex('E');

console.log(g.adjecentList);