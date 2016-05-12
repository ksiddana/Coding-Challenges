/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

// use an object, to store the value of the character and the index

var longestRun = function (string) {
  // TODO: Your code here!

  var storage = {};
  var longestCharacter = [];
  var temp = 0;



  for (var i = 0; i < string.length; i++) {
    var currentLetter = string[i]
    
    if (!storage[currentLetter]) {
      storage[currentLetter] = {count: 1, index: i};
    } else {
      storage[currentLetter].count += 1;
    }
  }

  for (var key in storage) {
    if (storage[key].count > temp){
      tempLetter = key;
      temp = storage[key].count;
      longestCharacter.push(temp)
    } 
  }

  console.log(storage, temp, tempLetter);

};

longestRun("abbbcc") // [1, 3]

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for(var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
