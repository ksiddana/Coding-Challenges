/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The integers in the array are either entirely odd or entirely even except for a single integer N. 
Write a method that takes the array as an argument and returns N.

For example:

[2, 4, 0, 100, 4, 11, 2602, 36]

Should return: 11

[160, 3, 1719, 19, 11, 13, -21]

Should return: 160

Test.assertEquals(findOutlier([0, 1, 2]), 1)
Test.assertEquals(findOutlier([1, 2, 3]), 2)
Test.assertEquals(findOutlier([2,6,8,10,3]), 3)
Test.assertEquals(findOutlier([0,0,3,0,0]), 3)
Test.assertEquals(findOutlier([1,1,0,1,1]), 0)
*/


function findOutlier(integers){
  //your code here
  var index = 0;
  var result = [];


  var recursion = function() {

    // As value of the integer Array is even keep pushing them
    // into a results array
    if (integers[index] % 2 !== 0) {
      result.push(integers[index]);
    }

    // Base Case
    if (index === integers.length - 1) {
      return
    }

    // increment the counter for recursion
    index++;

    // Dive into recursion
    return recursion();
  }

  // Start the recursion
  recursion()
  // console.log(result);
  return parseInt(result);
}

var input = [2, 4, 0, 100, 4, 11, 2602, 36];

console.log(findOutlier(input));