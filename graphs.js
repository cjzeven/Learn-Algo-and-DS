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

  dfsRecusive(vertex) {
    let track = {};
    let result = [];

    let helper = (v) => {
      if (!this.adjecentList[v]) return undefined;
      track[v] = true;
      result.push(v);
      this.adjecentList[v].map(v2 => {
        if (!track[v2]) helper(v2);
      });
    }

    helper(vertex);
    return result;
  }

  dfsInterative(vertex) {
    const stack = [];
    const tracking = {};
    const result = [];

    stack.push(vertex);

    while (stack.length) {

      let vertex = stack.pop();

      if (!tracking[vertex]) {
        tracking[vertex] = true;
        result.push(vertex);
        this.adjecentList[vertex].map(item => stack.push(item));
      }
    }

    return result;
  }

  bfsIterative(vertex) {
    const queue = [];
    const tracking = {};
    const result = [];

    queue.push(vertex);

    while(queue.length) {

      let vertex = queue.shift();

      if (!tracking[vertex]) {
        tracking[vertex] = true;
        result.push(vertex);
        this.adjecentList[vertex].map(item => queue.push(item));
      }
    }

    return result;
  }

  bfsRecursive(vertex) {
    const helper = (queue, tracking = {}, result = []) => {
      if (!queue.length) return result;

      let vertex = queue.shift();

      if (!tracking[vertex]) {
        tracking[vertex] = true;
        result.push(vertex);
        this.adjecentList[vertex].map(item => queue.push(item));
      }

      return helper(queue, tracking, result);
    }

    return helper([vertex]);
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

console.log('DFS Recursive', g.dfsRecusive('A'));
console.log('DFS Iterative', g.dfsInterative('A'));
console.log('BFS Iterative', g.bfsIterative('A'));
console.log('BFS Recursive', g.bfsRecursive('A'));

console.log(g.adjecentList);

g.removeEdge('A', 'B');

console.log(g.adjecentList);

g.removeVertex('B');
g.removeVertex('E');

console.log(g.adjecentList);