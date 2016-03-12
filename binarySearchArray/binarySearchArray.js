/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

var count = 0;

var binarySearch = function (array, target) {

  var subroutine = function(low, high) {

    var midpointIndex = Math.floor((high - low) / 2) + low;
    // console.log(midpointIndex);

    if (array[midpointIndex] === target) {
      console.log("Found the Index:", midpointIndex);
      return midpointIndex;
      // return midpointIndex;
    }
    else if (high === low) { // check if the number doesn't exist
      console.log("Did NOT find Number");
      return null;
    }
    // If the target is less than the midpointIndex
    else if (array[midpointIndex] > target) {
      // console.log("Array Elements Target is Less than Midpoint", array.slice(0, midpointIndex))
      return subroutine(low, midpointIndex);
    } 
    else if ( low === midpointIndex) {
      return subroutine(midpointIndex + 1, high);
    }
    else {
      // console.log("Array Elements Target is Greater than Midpoint", array.slice(midpointIndex, array.length))
      return subroutine(midpointIndex, high);

    }
  }

  subroutine(0, array.length - 1);

};

var index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10);
// console.log(index); // [3]
