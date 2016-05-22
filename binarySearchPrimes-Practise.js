var primes = [2, 3, 5, 7, 10, 11, 12, 13, 17, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];


// Objective is to find 67, return the index of 67

var binarySearch = function(target) {

  var left = 0;
  var right = primes.length - 1;
  var middle;
  

  while (left <= right) {

    middle = Math.floor((right + left)/2)

    if (primes[middle] === target ) {
      return middle;
    }

    // Value is greater than the target, so now check Left side of the array.
    if (primes[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;

}


var a = binarySearch(53);
console.log(a);