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
  var combinations = [];

  // console.log(typeof combinations);

  var recursiveFunction = function() {
    
    // Base Case for recursion, when the to insert a 
    // Combination into output.
    if (combinations.length === string.length ) {
      output.push(combinations.slice().join(""));
      return;
    }

    // Iterate through the string
      // When you reach the first letter, 
        // Check if there are more letters in the string
        // Push that letter into the combinations Array
        // Open up a new function, pass in the sliced array.
        // Keep adding the values of the element, till you
        // reach the end of the element
    for (var i = 0; i < string.length; i++) {

      combinations.push(string[i]);
      recursiveFunction()
      // console.log(combinations);
      combinations.pop();
      /*combinations.push(string[i]);

      console.log(combinations);

      
      if (combinations.length !== string.length) {
        recursiveFunction(  combinations.slice());
      }
      // console.log(combinations);
      
      combinations.pop();*/
    }
  }

  recursiveFunction();
  // console.log(combinations);
  console.log(output);
  return combinations;
};

var anagrams = allAnagrams('abc');
// console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
