/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3 5 8 13
 *   0 1 2 3 4 5 6 7
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */
var result = 0;
var i = 0;
var nthFibonacci = function (n) {
  // TODO: implement me!
  
  // Base Case for return
  if (n <= 2) {
    return 1;
  }

  result = result + i;
  i++;
  // console.log(n, result);
  result = nthFibonacci(n-1) + nthFibonacci(n-2);
  // console.log(result);
  return result;
};

var result = nthFibonacci(20);
console.log(result);


