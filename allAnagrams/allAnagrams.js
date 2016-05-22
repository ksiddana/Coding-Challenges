/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  // Your code here.
  var output = [];
  var combinations = {};

  var recurse = function(ana, str) {

    // console.log(ana);
    if (ana.length === string.length) {
      combinations[ana] = true
    }

    for (var i = 0; i < str.length; i++) {
      var c = str[i]
      recurse(ana + c, str.substring(0, i) + str.substring(i + 1, str.length))
    }
  }

  recurse('', string);
  return Object.keys(combinations);
};

var anagrams = allAnagrams('abc');
console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
