/*
Lists are data structures composed of nested objects, 
each containing a single value and a reference to the next object.

Here's an example of a list in JavaScript:
{value: 1, next: {value: 2, next: {value: 3, next: null}}}

Write a function listToArray (or list_to_array in Python) that converts a list to an array, like this:

[1, 2, 3]

var list1 = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
var list2 = {value: "foo", next: {value: "bar", next: null}};

Test.assertSimilar(listToArray(list1), [1, 2, 3]);
Test.assertSimilar(listToArray(list2), ["foo", "bar"]);

*/

function listToArray(list) {
  //write your code here
  var result = [];
  var danger = 0;
  var list1 = list;

  var recursion = function(list1) {

    // Danger Variable
    if (danger > 50) {
      return
    }
    danger++;

    // Begin recursion for Objects
    // Base case will hit, when you reach the end of the for loop
    for (var key in list1) {
      console.log(list1[key]);

      // Check, if key is next and is null and we want to be done
      // we have reached the end of the tree
      if (key === 'next' && list1[key] === null) {
        return
      }

      // If the key is of value, we want to push that into our array
      if (key === 'value') {
        result.push(list1[key])
      } 
      
      // If the key is of type next and is of instance Object
      // We want to repeat the recursion
      if (key === 'next' && list1[key] instanceof Object) {
        recursion(list1[key])
      }
    }

  } // end of recursion function

  recursion(list);
  return result;
}

var list1 = {value: 1, next: {value: 2, next: {value: 3, next: null}}};

console.log(listToArray(list1));