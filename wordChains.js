/*

    CAT
--> COT
--> COG
--> DOG

Given 2 words, see how many times it take to reach that word

*/

var fs = require('fs');

// returns the path to the word list which is separated by `\n` 
var wordListPath = require('word-list');
 
var dictionary = fs.readFileSync(wordListPath, 'utf8').split('\n');

// console.log(wordArray);

var wordChain1 = function(word1, word2) {

  var count = 0;
  var word = [];
  word1 = word1.split('');
  word2 = word2.split('');
  var letterArray = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < word1.length; i++) {

    for (var i = 0; i < word1.length; i++) {
      console.log(word1)
      if (word1[i] !== word2[i]) {
          // word.push(word1[i])
          // count++;
          word1[i] = word2[i];
      }
    }
  }

  console.log(word1);

}

words = ['CAT', 'BAT', 'TAB', 'BAG', 'COT', 'COG', 'GOC'];

var wordChain2 = function(words, target) {

  var result = [];
  var memory = {};
  var hasVistied = {};
  var count = 0;

  for (var i = 0; i < words.length; i++) {
    if (memory[words[i][0]] === undefined) {
      memory[words[i][0]] = [words[i]];
    } else {
      memory[words[i][0]].push(words[i])
    }
  }

  console.log(memory);

  var recursiveFunction = function(word) {
      
      // Base Case
      // if the length of the keys in memory is equal to the 
      // list of the words && does the word even exist
      
      if (word === target) {
        count--;
        return;
      };

      console.log(hasVistied, word);
      hasVistied[word] = true;

      if (memory[word[word.length - 1]]) {

        for (var i = 0; i < memory[word[word.length - 1]].length; i++) {
          var nextWord = memory[word[word.length - 1]][i]
          
          if (!hasVistied[nextWord]) {

            count++;
            // console.log("BEFORE: ", count);
            recursiveFunction(memory[word[word.length - 1]][i]);
            // console.log("AFTER: ",count);
            // count--;
          }
        }
      }

  }
  recursiveFunction(words[0]);
  return count;

}


console.log(wordChain2(words, 'BAG'));