var arr = ['cat', 'dog', 'tac', 'god', 'act'];

var allAnagrams = function(arr) {
  var anagrams = {};

  var recurse = function(word, str) {

    if (word.length === arr[0].length) {
      anagrams[word] = true;
    }

    for (var i = 0; i < str.length; i++) {
      recurse(word + str[i], str.substring(0, i) + str.substring(i+1) )
    }
  }
  for (var i = 0; i < arr.length; i++) {
    recurse('', arr[i])
  }
  return Object.keys(anagrams);
}

console.log(allAnagrams(arr));