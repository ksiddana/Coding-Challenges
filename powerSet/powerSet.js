/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

 // get all the unique letters
 // Recursively find all solutions


var powerSet = function(str){

  str = str || '';

  var solutions = {};

  var subroutine = function(strSet) {

    for (var i = 0; i < strSet.length; i++) {
      var subSet = strSet.substr(0,i) + strSet.substr(i+1, strSet.length);
      
      // check if see if have visited this combo
      if (!solutions[subSet]) {
        solutions[subSet] = true;
        subroutine(subSet);
      }
    }
  }

  subroutine(str)
  return Object.keys(solutions);
}

var test = powerSet("abc");
console.log(test);
