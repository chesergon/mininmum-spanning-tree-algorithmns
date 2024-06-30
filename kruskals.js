// Union-Find (Disjoint Set Union) data structure for Kruskal's algorithm
class UnionFind {
    constructor(size) {
      this.parent = new Array(size).fill(0).map((_, index) => index);
      this.rank = new Array(size).fill(0);
    }
  
    find(x) {
      if (this.parent[x] !== x) {
        this.parent[x] = this.find(this.parent[x]);
      }
      return this.parent[x];
    }
  
    union(x, y) {
      let rootX = this.find(x);
      let rootY = this.find(y);
  
      if (rootX !== rootY) {
        if (this.rank[rootX] > this.rank[rootY]) {
          this.parent[rootY] = rootX;
        } else if (this.rank[rootX] < this.rank[rootY]) {
          this.parent[rootX] = rootY;
        } else {
          this.parent[rootY] = rootX;
          this.rank[rootX]++;
        }
        return true; // Union successful
      }
      return false; // Union failed (same set)
    }
  }
  
  // Kruskal's algorithm to find Minimum Spanning Tree (MST)
  function kruskalsAlgorithm(edges, numVertices) {
    // Step 1: Sort edges based on their weight
    edges.sort((a, b) => a[2] - b[2]);
  
    // Initialize Union-Find data structure
    const uf = new UnionFind(numVertices);
  
    // Resulting MST
    const mst = [];
  
    for (let edge of edges) {
      let [u, v, weight] = edge;
  
      // Step 2: Check if adding this edge forms a cycle (using Union-Find)
      if (uf.union(u, v)) {
        mst.push(edge);
        
        // If MST is found (contains V-1 edges), break early
        if (mst.length === numVertices - 1) {
          break;
        }
      }
    }
  
    return mst;
  }
  
  // Example usage:
  const numVertices = 5;
  const edges = [
    [0, 1, 2],
    [0, 3, 6],
    [1, 2, 3],
    [1, 3, 8],
    [1, 4, 5],
    [2, 4, 7],
    [3, 4, 9]
  ];
  
  const mst = kruskalsAlgorithm(edges, numVertices);
  console.log("Minimum Spanning Tree (Kruskal's Algorithm):", mst);
  