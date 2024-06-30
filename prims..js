// Function to find the vertex with the minimum key value,
// from the set of vertices not yet included in MST
function minKey(key, mstSet, V) {
    let min = Infinity;
    let minIndex = -1;
  
    for (let v = 0; v < V; v++) {
      if (mstSet[v] === false && key[v] < min) {
        min = key[v];
        minIndex = v;
      }
    }
  
    return minIndex;
  }
  
  // Function to print MST stored in parent array
  function printMST(parent, graph, V) {
    console.log("Edge   Weight");
    for (let i = 1; i < V; i++) {
      console.log(parent[i] + " - " + i + "    " + graph[i][parent[i]]);
    }
  }
  
  // Function to construct and print MST for a graph represented using adjacency matrix representation
  function primMST(graph, V) {
    // Array to store constructed MST
    let parent = new Array(V);
    // Key values used to pick minimum weight edge in cut
    let key = new Array(V);
    // To represent set of vertices not yet included in MST
    let mstSet = new Array(V).fill(false);
  
    // Initialize all keys as Infinity
    for (let i = 0; i < V; i++) {
      key[i] = Infinity;
    }
  
    // Always include first vertex in MST
    key[0] = 0;
    parent[0] = -1; // First node is always root of MST
  
    // The MST will have V vertices
    for (let count = 0; count < V - 1; count++) {
      // Pick the minimum key vertex from the set of vertices not yet included in MST
      let u = minKey(key, mstSet, V);
  
      // Add the picked vertex to the MST set
      mstSet[u] = true;
  
      // Update key value and parent index of the adjacent vertices of the picked vertex.
      // Consider only those vertices which are not yet included in MST
      for (let v = 0; v < V; v++) {
        // graph[u][v] is non zero only for adjacent vertices of m
        // mstSet[v] is false for vertices not yet included in MST
        // Update the key only if graph[u][v] is smaller than key[v]
        if (graph[u][v] && mstSet[v] === false && graph[u][v]  an
  