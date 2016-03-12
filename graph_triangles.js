var graph = [[0,1],
             [2,1],
             [0,2],
             [4,1],
             [4,0],
             [4,2]
            ];

// Iteration over nodes
//  with nodes get all connected nodes
//  iterate over connected nodes
//   check if they have mutual connections
//     if so we found a triangle
//         sort triangle def
//         store triangle defin in triangle dictionary
//     if not 
// return count of triangles in triangle dictionary



var counTris = function(graph) {
  var nodes = {};
  var tris = {};

  var getConnectedNodes = function(node) {
    var connectedNodes = [];
    for (var i = 0; i < graph.length; i++) {
      if (graph[i][0] === node) {
        connectedNodes.push(graph[i][1]);
      } else if (graph[i][1] === node) {
        connectedNodes.push(graph[i][0]);
      }
    }
    return connectedNodes;
  }

  for (var i = 0; i < graph.length; i++) {
    nodes[graph[i][0]] = 'something';
    nodes[graph[i][1]] = 'something';
  }

  // Iterate over nodes
  for (var key in nodes) {
    var connected = getConnectedNodes(+key);
    nodes[key] = connected;

  }

  for (var key in nodes) {
    var currentNode = nodes[key];
    for (var k = 0; k < currentNode.length; k++) {
      for (var m = 0; m < currentNode.length; m++) {
        if (k !== m) {
          if (nodes[currentNode[k]].includes(currentNode[m])) {
            console.log(currentNode[k], currentNode[m]);
            var tempTri = [+key, currentNode[k], currentNode[m]];
            tempTri.sort();
            tris[tempTri.join('')] = true;
          }
        }
      }
    }
  }

  return Object.keys(tris).length;
};

counTris(graph);