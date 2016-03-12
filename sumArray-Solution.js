/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */
// Solved in O(n) time with O(1) memory

/*

1. Iterate through the full array
2. sum = sum + array[i];
3. if ans = sum
4. if sum > ans
5. update ans = sum
6. else we reset sum = 0; 
2. If sum > maxSum
  2. maxSum = sum

*/


var sumArray3 = function(array) {

    // Declare a Sum and a MaxSum variable
    var sum = 0;
    var maxSum = 0;

    //Iterate through the array
    for (var i = 0; i < array.length; i++) {

      // If the sum of the current Element is positive
      if (sum + array[i] > 0) {
        
        // Start taking the sum from that index
        sum = sum + array[i];
        maxSum = sum;
        
      }
      // if the sum of the next number + the pervious sum is negative
      if (sum + array[i] < 0) {
        
        maxSum = sum;
        sum = 0;

      }

      // If the new Sum is less than than maximumSum so far
      // set new sum equal to the perivous Sum
/*      if (sum < maxSum) {
        sum = maxSum;
      }*/


      // Store the maximum Sum at the end of every decision.
    }    
  console.log(maxSum);
  return maxSum;
}





//
// store 2 variables currentSum and maxSum
// Iterate over the array

var sumArray1 = function(array) {
  var maxSum = Number.NEGATIVE_INFINITY;
  var currentSum;
  for (var i = 0; i < array.length; i++) {
    currentSum = 0;
    for (var j = i; j < array.length; j++) {
      currentSum = currentSum + array[j];

      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }
  console.log(maxSum);
  return maxSum;
}


// Iterate through the array
  // if the sum is greater than the current element, continue adding
  // if the sum is less than the current element, reset the sum, store the maxSum.
  // if the 
  // sum is equal to the sum of the next element
var sumArray2 = function(array) {

var maxSum = Number.NEGATIVE_INFINITY;
var currentSum = 0;

  for (var i = 0; i < array.length; i++) {
    //Add the new number to the current sum
    currentSum += array[i];
    //Record the largest sum if necessary
    maxSum = Math.max(maxSum, currentSum);
    //if negative, throw out earlier progress
    // and consider intervals starting at this point
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  console.log(maxSum);
  return maxSum;
}

/*var sumArray = function(array) {

  var contiguousArray = [];
  var newSum = 0;
  var previousSum = 0;
  var maxSum = 0;

  // Check all the items of the array
  for (var i = 0; i < array.length; i++) {
    // Add the total of the array for every item
    
    // if previous Total is greater than the current total, don't go forward
    newSum = newSum + array[i];
    
    if (array[i] > newSum) {
      maxSum = newSum;
      newSum = 0
      console.log("Previous Sum", previousSum);
      
    }

    // Store the values of the items in a contingous Array
    contiguousArray.push(array[i]);
  }

  console.log("Total Sum: ", newSum);
  console.log("contiguous Array: ", contiguousArray);

  return contiguousArray;
};*/

sumArray1([1, 2, 3]);
sumArray1([1, 2, 3, -4]);
sumArray1([1, 2, 3, -4, 5]);
sumArray1([10, -11, 11]);
sumArray1([4, -1, 5]);
console.log("-------------");
sumArray2([1, 2, 3]);
sumArray2([1, 2, 3, -4]);
sumArray2([1, 2, 3, -4, 5]);
sumArray2([10, -11, 11]);
sumArray2([4, -1, 5]);
console.log("SumArray3-------------");
sumArray3([1, 2, 3]);
sumArray3([1, 2, 3, -4]);
sumArray3([1, 2, 3, -4, 5]);
sumArray3([10, -11, 11]);
sumArray3([4, -1, 5]);
