/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};


var telephoneWords = function(digitString) {
  // TODO: return every combination that can be spelled on a phone with these digits

  // Store the letter in an array using valueOf()
  var storageArray = [];
  var words = [];
  var playedSoFar = [];

/*  for (var i = 0; i < digitString.length; i++) { 

    // For every letter in the string, find the key
    for (var key in phoneDigitsToLetters) {
        if (digitString[i] === key) {
          storageArray.push(phoneDigitsToLetters[key]);
        }  
    }
  }
  console.log(storageArray);*/

  // Iterate through the each letter in  the array.
  // Using the first letter, we want all combinations with A
  // Use a length counter, to determine if you are done with the second letter

  // Make a recursive function that takes in a 4 numbers
  // Lets take '129' as an example
  var lettersForDigits = function(word, digits) {

    // What's the base case?, when our length of the words is equal to the length of the digits
    if (digits.length === 0) {
      words.push(word)
      return;
    }

    var currentDigit = digits[0]; // [1]
    var remainDigits = digits.slice(1); // [2,9]
    var letters = phoneDigitsToLetters[currentDigit].split('');

    for (var i = 0; i < letters.length; i++) {
      lettersForDigits(word + letters[i], remainDigits);
    }


  }
  lettersForDigits('', digitString.split(''));
  console.log(words)
  return words

};

telephoneWords('3743');
