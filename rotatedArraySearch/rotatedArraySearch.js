/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

 // Iterate through the array
 // find the current index of the target and 
 // subtract from the 1, you will find the index and find out how many, times it has been rotated.

var rotatedArraySearch = function (rotated, target) {
  // Your code here:

  var location;

  for (var i = 0; i < rotated.length; i++) {
    if (target === rotated[i]) {
      var location = rotated.indexOf(rotated[i]);
      console.log(location);
    }
  }

  if (location !== undefined) {
    return location
  } else {
    return null
  }

};

var rotatedArraySearch2 = function (rotated, target) {
  // Your code here:

  var midpoint = Math.floor(rotated.length / 2, 0);
  console.log("Midpoint:", midpoint);

  if (target > rotated[midpoint]) {
  console.log("Element:", rotated[midpoint], midpoint);

    for (var i = midpoint; i < rotated.length; i++) {

      if (target === rotated[i]) {
        var location = rotated.indexOf(target);
        // console.log("1st Option:", location);
        return location;
      }

    }
  } else {

    for (var i = 0; i < midpoint; i++) {
      if (target === rotated[i]) {
        var location = rotated.indexOf(target);
        // console.log("2nd Option: ", location);
        return location
      }
    }
  }

};

// keep track of the first and last indexes
// while the array has a length (1st index < last index)
  // gt the middle index
  // if element at middle index is target
    // return middle index
  
  // if left side is sorted
    // if target is on the left side
    // cut out the right sof the array
    // else
    // cut out the left side of the array

  // else (the right side is sorted)
    // if target is on the right side
    // cut out the left side of the array

    // else
    // cut out the right side of th array

  // return null

var rotatedArraySearch3 = function (rotated, target) {
  // Your code here:

  var left = 0;



};


var test3 = rotatedArraySearch2([4, 5, 6, 0, 1, 2, 3], 5)
// var test4 = rotatedArraySearch2([4, 5, 6, 0, 1, 2, 3], 4)
// var test5 = rotatedArraySearch2([4, 5, 6, 0, 1, 2, 3], 3)

console.log(test3);
// console.log(test4);
// console.log(test5);


// var test1 = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2)
// var test2 = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100)
// console.log(test1);
// console.log(test2);


