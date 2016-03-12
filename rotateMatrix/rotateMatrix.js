/**
 * Write a function that rotates a NxN matrix 90 degrees.
 *
 * A matrix, also called a 2-D array, is simply an array of arrays of values.
 *
 * Example 1x1 matrix:
 *   [ [1] ]
 *
 * Example 2x2 matrix:
 *  [ [1,2],
 *    [3,4] ]
 *
 * Important note:
 *   In mathematics, and generally in CS, matrices are identified as m-by-n, where m is
 *   the number of *rows* and n is the number of *columns*. So an [i][j] address in a matrix
 *   will be i places down, and j places over. This usually matches the way arrays are
 *   addressed in code, but keep in mind that it differs from use in geometry and computer
 *   graphics, where coordinates of the form (x,y) are usually x units over, and y units down.
 *
 * Example rotation of a 4x4 matrix:
 *
 * var matrix = [
 *  [1,2,3,4],
 *  [5,6,7,8],
 *  [9,'A','B','C'],
 *  ['D','E','F','G']
 * ];
 * matrix[0][0]; // 1
 * matrix[3][2]; // 'F'
 *
 * var rotatedMatrix = rotateMatrix(matrix); // Rotate 90 degrees clockwise
 * // rotatedMatrix is:
 * [ ['D',9,5,1],
 *  ['E','A',6,2],
 *  ['F','B',7,3],
 *  ['G','C',8,4]
 * ]
 * rotatedMatrix[0][0]; // 'D'
 * rotatedMatrix[3][2]; // 8
 *
 * Extra credit:
 *  - Make your function operate on rectangular matrices (MxN rather than NxN).
 *  - Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)
 */

// Iterate through matrix row
// Make a new matrix
// convert the row [0] -rows into last column[3]
// keeping doing the above till you have array's that:
  // row[0][0] -> row[0]column[3]
  // row[0][1] -> row[1]column[3] / 
  // row[0][2] -> row[2]column[3]
  // row[0][3] -> row[3]column[3]

var rotateMatrix = function(matrix, direction) {
  // Your code here.
  direction = direction || 1;
  var rotatedMatrix = []
  var newRow = [];
  var m = matrix.length; // row
  var n = matrix[0].length; // column

  for (var i = 0; i < n; i++) {
    var currentRow = [];
    // console.log(currentRow);
    // rotatedMatrix.push(currentRow);

    for (var j = 0; j < m; j++) {
      // console.log(currentRow.push(matrix[j][i]));
      if (direction > 0) {
        currentRow.push(matrix[m - 1 - j][i]);
      } else if (direction < 0 ) {
        currentRow.push(matrix[j][n - 1 - i])
      }
      
    }
    rotatedMatrix.push(currentRow);
  }

  return rotatedMatrix;
};

var matrix = [
  [1,2,3,4],
  [5,6,7,8],
  [9,'A','B','C'],
  ['D','E','F','G']
 ];

 var matrix1 = [
  [1,2,3],
  [5,6,7],
  [8,9,10],
  [11,12,13],
 ];

matrix[0][0]; // 1
matrix[3][2]; // 'F'

console.log(rotateMatrix(matrix1, -1));
