/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var nonrepeatedCharacters = {};
  var found = false;

  for (var i = 0; i < string.length; i++) {

    if (!nonrepeatedCharacters[string[i]]) {
      nonrepeatedCharacters[string[i]] = 1;
    } else {
      nonrepeatedCharacters[string[i]]++
    }

  }

  for (var i = 0; i < string.length; i++) {
    if (nonrepeatedCharacters[string[i]] === 1 && !found) {
      found = true
      console.log(string[i])
      return string[i]
    }
  }


  console.log(nonrepeatedCharacters);

};

firstNonRepeatedCharacter('ABA');
firstNonRepeatedCharacter('ACABDBE');