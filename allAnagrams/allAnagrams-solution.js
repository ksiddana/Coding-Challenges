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

var allAnagrams = function (string) {
  // Your code here.
  var anagrams = {};

  var generator = function (text, options) {

    console.log('OPTIONS Slice:', text, '<-->', options);

    if (text.length === string.length) {
      anagrams[text] = true;
    }

    for (var i = 0; i < options.length; i++) {
      generator(text + options[i], options.slice(0, i) + options.slice(i + 1));

    }
  };

  generator('', string);
  return Object.keys(anagrams);
};

var anagrams = allAnagrams('abc');
console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

//string  i   options   text
