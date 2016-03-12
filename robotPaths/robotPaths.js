/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  // console.log(board);
  return board;
};

/*board = makeBoard(2);
var paths = 0;

var robotPaths = function(n, board, i, j) {


  if (i === board.length - 1 && j === board.length - 1) {
    console.log("Reached here");
    return 1
  } else if ( i === board.length || j === board.length ) {
    console.log("Out of Bounds");
    return
  } else {
    robotPaths(n, board, i+1, j);
  }

}

robotPaths(2, board, 1, 0);*/

var b = new makeBoard(2);
console.log(b);
console.log(b.hasBeenVisited(1, 1));

var robotPaths = function(n, board, i, j) {
  if(!board) {
    board = new makeBoard(n);
    i = 0;
    j = 0;
  }
    //check if within board, and not on place already visisted.
  if(!(i >= 0 && i < n && j >= 0 && j <n) || board.hasBeenVisited(i,j)) {
    return 0;
  }
    //got to the end 
  if(i === n - 1 && j === n - 1) {
    return 1;
  }
  board.togglePiece(i, j);

  var result = robotPaths(n, board, i, j + 1) + robotPaths(n, board, i, j - 1) + robotPaths(n, board, i + 1, j) + robotPaths(n, board, i -1, j);

  board.togglePiece(i, j);
  return result;
};

console.log(robotPaths(3));