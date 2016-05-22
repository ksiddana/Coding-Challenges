/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(array) {
  // Your code here.
  result = {};
  found = false;

  for (var i = 0; i < array.length; i++) {
    if (!result[array[i]]) {
      result[array[i]] = 1
    } else {
      result[array[i]]++
    }
  }

  for (var i = 0; i < array.length; i++) {
    if ((result[array[i]] % 2 === 0) && !found) {
      found = true;
      console.log(array[i]);
      return array[i];
      // console.log(array[i]);
    }
  }

  console.log(result);
};

var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);