/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */
 // one rule to rule them all
 // Choose the max (Product of last 3, product of last 2 and last 1) assuming the array is sorted.
var largestProductOfThree = function(array) {
  // TODO: everything
  // Slice makes a copy of the original array, since they are passed by reference.
  var nonMutatedArray = array.slice().sort();
  var n = array.length;

  var largeArray = function(i, j, result) {
    
  }

  var lastProduct = array[n-1] * array[n-2] * array[n-3];
  var firstProduct = array[n-1] * array[0] * array[1];

  return Math.max(firstProduct, lastProduct);

};

var output = largestProductOfThree([-1,-2, 1, 0, 2])
console.log(output);
var output = largestProductOfThree([-1,-3, -2, 1, 0, 2, 2])
console.log(output);