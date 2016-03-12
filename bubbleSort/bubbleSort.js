/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Introduce i into the global scope so we can test function efficiency
var i;

// Feel free to add helper functions if needed.



var bubbleSort1 = function(array) {
  // Your code here.

  var swap = function(i, j, array) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    // console.log(array)
    return array;
  }

  for (var j = 0; j < array.length; j++) {

    for (var i = 0; i < (array.length - j - 1); i++) {
      
      if (array[i] > array[i+1]) {
        swap(i, i+1, array)
      }
    }
  }
  return array;
};

// var output = bubbleSort([2, 12, 10, 3, 1, 0, 4]); // yields [1, 2, 3]
// console.log("OUTPUT", output);


/* Version 3 */

var bubbleSort3 = function(array) {
    
    for (var i = 0; i < array.length; i++) {
        for (var j = array.length - 1; j > i; j--) {
            var temp = array[j];
            if (array[i] > temp) {
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    
    return array;
}

a = [10,2,4,-1, 5,8,22,1,15,14,13]

// bubbleSort3(a);


var bubbleSort4 = function(array) {
    
    var startIndex = 0;
    var endIndex = array.length;
    var swapAgain = false;
    var newArray = array;
    
    var subroutine = function(startIndex, endIndex) {
        
        //Base Case
        if (startIndex > endIndex) {
           return 
        }

        // if (newArray[p2] === undefined && swapAgain === true) {
        //   console.log("---------------");
        //   p1 = 0;
        //   p2 = 1;
        //   swapAgain = false;
        //   subroutine(newArray)
        // }

        if (startIndex === endIndex - 1) {
          console.log("---------------------");
          return subroutine(0, endIndex - 1);
        }

        if (newArray[startIndex] > newArray[startIndex + 1]) {
            var temp = newArray[startIndex];
            newArray[startIndex] = newArray[startIndex + 1];
            newArray[startIndex + 1] = temp;
        }

        console.log(newArray, "SI: ", startIndex, "EI: ", endIndex);
        startIndex = startIndex + 1;

        subroutine(startIndex, endIndex);
        
    }

    subroutine(startIndex, endIndex);
    return newArray;
}

a = [3,10,2,4,-1]

console.log(bubbleSort4(a));
