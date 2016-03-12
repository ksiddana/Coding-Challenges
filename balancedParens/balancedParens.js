/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

 // Split the string
 // iterate through the string
 // if the length of the array is odd, set to false;
 // if the length is even, 
    // Now check the brackets
    // For every opening bracket you should have a closing bracket
    // Whats the best way to store this, in a object?
    // You need to find the inner most bracket, and check if that is balanced, if that is not balanced, set to false
    


var balancedParens1 = function(input){

  var brackets = input.split("");
  // console.log(brackets);
  var balanced = false
  var balancedObject = {};

  if (brackets.length % 2 !== 0) {
    balanced = false;
  } else {

    for (var i = 0; i < brackets.length; i++) {
      if (brackets[i] === '(' || '[' || '{') {
        balancedObject[i] = brackets[i];
      }

    }
  

    for (var key in balancedObject) {
      console.log(balancedObject[key]);
      if (balancedObject[key] === '(' || '[' || '{') {
        balanced = false;
      }

      if (balancedObject[key] === ')' || ']' || '}') {
        balanced = true;
      }
    }
  }
  console.log(balanced);
  console.log(balancedObject);


};

var balancedParens = function(input){

 var stack = [];
 var pairs = {'{': '}', '[':']', '(':')'}

   for (var i = 0; i < input.length; i++) {
    var chr = input[i];
    console.log(stack);

    if (pairs[chr]) {
      stack.push(chr);
    } else if (chr === '}' || ']' || ')') {
      if (pairs[stack.pop()] !== chr) {
        return false
      }
    }

   }

   // return false if any unclosed brackets remain
   return stack.length === 0;


};

// balancedParens('(');  // false
balancedParens('()'); // true
// balancedParens(')(');  // false
// balancedParens('(())');  // true

// balancedParens('[](){}'); // true
// balancedParens('[({})]');   // true
// balancedParens('[(]{)}'); // false


