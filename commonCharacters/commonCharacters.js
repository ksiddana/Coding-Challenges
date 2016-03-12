/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(string1, string2) {
  // TODO: Your code here!

  result = {};
  commonCharacters = [];

  for (var i = 0; i < string1.length; i++) {
    for (var j = 0; j < string2.length; j++) {

      if (!result[string1[i]] && string1[i].match(/[a-z]/i)) {
        
          if (string1[i] === string2[j]) {
            result[string1[i]] = 1
          } else {
            result[string1[i]] += 1
          }
      }

    }
  }

  for (var key in result) {
    if (result[key] === 1) {
      commonCharacters.push(key);
    }
  }

  return commonCharacters.join("");
  // console.log(result);

};

var output = commonCharacters('aAcex?ivh ou23423jhb243hj4bh23b4j32h', 'aeAgia?ho bu234hbv23hjb4h2jb423424')
console.log(output);

var intersection = function(set1, set2) {
  return Object.keys(set1).reduce(
    function(out, key) {
      if (key in set2) {
        out[key] = true
      } 
      return out;
    }, {});
}

var output1 = intersection(['1','2','1', 'a','c'], ['1','2','3','4','a']);
console.log(output1);
