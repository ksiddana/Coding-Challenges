/*var input = ['i', 'in', 'if', 'int', 'input', 'integer'];

/*var wordChain = function(input) {
    var words = [];
    var memory = {};
    
    words = input
    console.log(words)
    
    var recursive = function(word) {
        
        if (word.length === 0) {
            return
        }
        
        for (var i = 0; i < words.length; i++) {
           
           if (!memory[words[i]]) {
               
               memory[words[i]] = true;
               recursive(words.slice(1,words.length - 1))

           } 
           console.log(memory);       
        }
    }
            
    recursive(words);
    
};

//var input = ['i', 'in', 'if', 'int', 'input', 'integer'];

// iterate through the words
// find the 1st letter
    // insert it in the memory {}
    // remove the letter from the words array
    // check to see if the next letter in the word list,


var wordChain = function(wordsArray) {
    // console.log(input);

    var memory = {};

    for (var i = 0; i < wordsArray.length; i++) {
        var currentWord = wordsArray[i];
        memory[currentWord] = [currentWord];
    }
    

    for (var i = 0; i < wordsArray.length; i++) {
        var currentWord = wordsArray[i];
        for (var j = 0; j < currentWord.length; j++) {
            var currentLetterInWord = currentWord[j];

            if (currentWord === currentLetterInWord) {
                console.log(currentLetterInWord);
            }
        }
        
        

        // wordsArray = wordsArray.slice(i, wordsArray.length);
    }
        console.log(memory);
}

// wordChain(input);











var words = ['i', 'in', 'if', 'int', 'input', 'integer'];

var wordChain3 = function (words) {
    var memory = {};
    var result;
    
    var findChain = function(input, word) {
        var temp;
        if (!memory[word]) {
            memory[word] = [word];
            
        }
        if (word.length > 1) {

            if (memory[input]) {
                temp = memory[input];
                memory[word] = temp;
                memory[word].push(word);
                delete memory[input];
            }
        }
        // console.log(memory, "++++",  word);
    }

    for (var i = 0; i < words.length; i++) {
        for (var j =  words[i].length; j > 0; j--) {
            console.log(words[i].slice(0,j), "<----->", words[i]);
            findChain(words[i].slice(0, j), words[i]);
        }
    }

    for (var key in memory) {
        if (!result) {
            result = memory[key];
        }
        if (memory[key].length > result.length) {
            result = memory[key];
        }
    }
    return result;
};

// console.log(wordChain3(words));*/

// you get an array of string ['i','in','if','input','int', 'integer','output']
// the function needs to spit out the longest word chain in the array
// so the output for this array should be, 'i', 'in', 'int', 'integer'
function findLongestChain(words) {
    
  var longestChain = [];
  var currentChain = [];

  //helper function
  var findChildren = function(baseWord) {
    var children = [];
    
    words.forEach(function (word){
      if(word.indexOf(baseWord) === 0 && word !== baseWord){
        children.push(word);
        console.log("CHILDREN: ", children, "WORD", word, "baseWord", baseWord);
      }
    });

    return children;
  };

  var recursion = function(currWord) {

    // console.log(currentChain);

    //check if we found a new longest chain
    if(currentChain.length > longestChain.length) {
      longestChain = currentChain.slice();
    }

    //determine who the children are
    var children = findChildren(currWord);

    for (var i = 0; i < children.length; i++) {

      //prep
      currentChain.push(children[i]);

      //dive
      recursion(children[i]);

      //cleanup
      currentChain.pop();
    }
  };

  recursion('');
  return longestChain;
}
var a = ['i','in','if','int'];
console.log('here it is', findLongestChain(a));

var a = ['in','if','input','int', 'integer','output','i'];
// console.log('here it is', findLongestChain(a));