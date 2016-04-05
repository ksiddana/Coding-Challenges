/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

  // Check if two things are equal ===
  // if not check if two things are objects
  // if yes, get all the keys
  // check that all the are the same
  // check that all key-value pairs are the same


  // write a subroutine that takes in 2 objects
  // Iterate through the object apple
    // if the key/value in apple == key/value in orange

var deepEquals1 = function(apple, orange) {

  var result = {};
  console.log(Object.keys(apple));

  var subroutine = function(obj1, obj2) {

    for (var key in obj1) {
      if (obj1[key] === obj2[key]) {
        result[key] = true;
      }

      if (typeof obj1[key] === 'object' || typeof obj2[key] === 'object') {
        subroutine(obj1[key], obj2[key]);
        result[key] = obj2[key];
      }
    }

  }
  subroutine(apple, orange);
  console.log(Object.keys(result));
  console.log(result);

}

var deepEquals = function(apple, orange){

  var result1 = {};

  // console.log(Object.keys(apple).length);
  // console.log(apple.hasOwnProperty(''));
  // console.log(Object.keys(orange).length);

  // Create a subroutine for iterating through the object
  
    
    if (apple === orange) { return true; }

    if (!orange || !apple) { return false; }

    if (!(apple instanceof Object) || !(orange instanceof Object) ) {
      return false;
    }

    var appleKeys = Object.keys(apple);
    var orangeKeys = Object.keys(orange);

    if (appleKeys.length !== orangeKeys.length) { return false; }
    if (appleKeys.length === 0) { return true; }

    for (var key in apple) {
      if (!deepEquals(apple[key], orange[key])) {
        return false;
      }
    }

    return true;

};


var output1 = deepEquals1({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
console.log(output1);

/*var output2 = deepEquals1({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
console.log(output2);*/
