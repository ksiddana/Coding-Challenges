/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
  // Iterate through the string
  // As we are going through each letter, keep track of the next letter
  // inclusing spaces also as characters
    // have two loops, one starting from the back, one from the front,
    // As we are checking through each letter, if you reach a common letter
    // you want to store that substring in array and check if it is a palindrome.


  var longest = '';

  function isPalindrome(string) {
    for (var i = 0; i < string.length/2; i++) {
      if (string[i] !== string[string.length - i -1]) {
        return false;
      }
    }
    return true;
  }

  for (var i = 0; i < string.length; i++) {
    // console.log(string[i]);

      for (var j = i; j < string.length; j++) {
        // console.log("[i]", i, "[j]", j, string[i], string[j]);
        var sub = string.slice(i, j+1);
        var p = isPalindrome(sub);
          
        if (p < sub.length) {
          longest = sub;
        }
          
      }
  }
  console.log(longest);
  return longest;
};
  // console.log(Object.keys(output).join(""));
  // console.log(checkPalindrome(output.join("")) );
  // console.log(output.join(""));


console.log(longestPalindrome("My dad is a racecar athlete"));