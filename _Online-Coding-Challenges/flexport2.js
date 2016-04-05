var board = [ [0, 8, 2, 0],
               [1, 4, 5, 0],
               [0, 1, 0, 1],
               [3, 9, 2, 0] ]


var findChlidren = function(row, col, bHeight, bWidth, visitedBoard) {

  var children = [];

  if ( (row - 1) >= 0 && !visitedBoard[row - 1][col]) {
    children.push([row - 1, col])
  }

  if ( (row + 1) < bHeight && !visitedBoard[row + 1][col]) {
    children.push([row+1, col])
  }

  if ( (col - 1) >= 0 && !visitedBoard[row][col - 1]) {
    children.push([row, col - 1]);
  }

  if ( (col + 1) < bWidth && !visitedBoard[row][col + 1]) {
    children.push([row, col + 1]);
  }

  return children;

}


var findShortestPath = function(startI, startJ, board) {

  console.log(startI, startJ);

  var total = 0;
  var boardHeight = board.length;
  var boardWidth = board[0].length;
  var visitedBoard = [];

  board.forEach(function(){
    visitedBoard.push([])
  });

  var recurse = function(grid, level) {

    var children = [];

    // Loop through all the coordinates 
    grid.forEach(function(coord){

      // Compute the Business Logic, for each Grid
      // Store the result in total;
      // console.log(coord[0]);
      total += board[coord[0]][coord[1]] * level;

      // Find the children of the current grid
      // Write a function that returns an array for finding all the children
      var childSet = findChlidren(coord[0], coord[1], boardHeight, boardWidth, visitedBoard);

      childSet.forEach(function(child) {
        visitedBoard[child[0]][child[1]] = true;
        children.push(child);
      })

    })

    console.log(children, total);
    console.log("\n\n--------------");
    

    if (children.length) {
      recurse(children, level + 1);
    }
  };

  visitedBoard[startI][startJ] = true;

  recurse([[startI, startJ]], 0)
  return total;
}

var checkTotal = function(board) {

  var tempTotal = 0;
  var result = 2000;
  var shortestGrid = [];

  for (var x = 0; x < board.length; x++) {
    for (var y = 0; y < board[x].length; y++) {
      
      tempTotal = findShortestPath(x, y, board);

      if (tempTotal < result) {
        result = tempTotal;
      }
    }
  }


  return result;

}

var shortest = checkTotal(board);
console.log(shortest);