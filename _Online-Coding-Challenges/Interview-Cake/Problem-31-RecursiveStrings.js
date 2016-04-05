//helper function

var combinations = function(string) {

  var anagrams = {};
  var text = []
  var count = 0;

  var subroutine = function(options) {
    // Base case
    console.log(count, text, options);
    
    if (text.length === string.length) {
      anagrams[text.join("")] = true;
      console.log("------------", text.join(""));
      return
    }

    count++;

    for (var i = 0; i < options.length; i++) {
      // Prepare of dive
      text.push(options[i])
      // Dive
      var substr = options.slice(0, i) + options.slice(i + 1);
      console.log('SUBSTRING', substr)
      subroutine(substr)
      // Come out of a Recursion 
      // Clean up after dive, continue the for loop 
      
      text.pop();
    }
  }

  subroutine(string);
  return Object.keys(anagrams);
}

var string = 'xyz';

console.log(combinations(string));