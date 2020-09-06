class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(value, priority) {
    this.queue.push({ value, priority });
    this.sorting();
  }

  dequeue() {
    return this.queue.shift();
  }

  sorting() {
    this.queue = this.queue.sort((a, b) => a.priority - b.priority);
  }

  length() {
    return this.queue.length;
  }
}

class WeightedGraphs {
  constructor() {
    this.adjecentList = {};
  }

  addVertex(vertex) {
    this.adjecentList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjecentList[vertex1].push({ node: vertex2, weight });
    this.adjecentList[vertex2].push({ node: vertex1, weight });
  }

  naiveDijkstra(vertexFrom, vertexTo) {
    const visited = {};
    const tableOfVertex = this.generateObjectTable(Infinity);
    const tableOfPrevs = this.generateObjectTable(null);

    tableOfVertex[vertexFrom] = 0;

    while(Object.keys(tableOfVertex).length) {
      let [vertex, weight] = this.getSmallerValueOfVertex(tableOfVertex);

      for (let item of this.adjecentList[vertex]) {
        if (!visited[item.node]) {
          let newWeight = item.weight + weight;
          if (newWeight < tableOfVertex[item.node]) {
            tableOfVertex[item.node] = newWeight;
            tableOfPrevs[item.node] = vertex;
          }
        }
      }
      
      visited[vertex] = true;
      delete tableOfVertex[vertex];
    }

    const paths = this.findPaths(tableOfPrevs, vertexTo);
    return paths;
  }

  findPaths(tableOfPrevs, vertexTo) {
    const paths = [vertexTo];
    const helper = (vertex) => {
      let newVertex = tableOfPrevs[vertex];
      if (!newVertex) return;
      paths.unshift(newVertex);
      helper(newVertex);
    }
    helper(vertexTo);
    return paths;
  }

  getSmallerValueOfVertex(data) {
    let smallest = null;
    let vertex = null;
    for (let i in data) {
      if (smallest === null || data[i] < smallest) {
        smallest = data[i];
        vertex = i;
      }
    }
    return [vertex, smallest];
  }

  generateObjectTable(defaultValue) {
    const data = {};
    for (let i in this.adjecentList) {
      data[i] = defaultValue;
    }
    return data;
  }

  dijkstraWithNaivePriorityQueue(start, finish) {
    const visited = {};
    const distances = {};
    const previous = {};
    const queue = new PriorityQueue();

    for (let vertex in this.adjecentList) {
      distances[vertex] = vertex === start ? 0 : Infinity;
      previous[vertex] = null;
      queue.enqueue(vertex, distances[vertex]);
    }

    let smallest;

    while(queue.length()) {

      smallest = queue.dequeue().value;

      for (let vertex of this.adjecentList[smallest]) {

        if (visited[vertex.node]) continue;

        let newValue = vertex.weight + distances[smallest];

        if (newValue < distances[vertex.node]) {
          distances[vertex.node] = newValue;
          previous[vertex.node] = smallest;
          visited[smallest] = true;
        }

      }

    }

    const result = [finish];
    let data;

    while(previous[finish]) {
      data = previous[finish];
      result.unshift(data);
      finish = data;
    }

    return result;

  }

}

const g = new WeightedGraphs();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B', 4);
g.addEdge('A', 'C', 2);
g.addEdge('B', 'E', 3);
g.addEdge('C', 'D', 2);
g.addEdge('C', 'F', 4);
g.addEdge('D', 'E', 3);
g.addEdge('D', 'F', 1);
g.addEdge('E', 'F', 1);

console.log(g.naiveDijkstra('A', 'C'));
console.log(g.dijkstraWithNaivePriorityQueue('A', 'D'));