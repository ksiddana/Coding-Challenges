// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.


var multiply = function(x, y) {
  // TODO: should return the product of x * y
  var xB = x << 1;
  var yB = y << 1;

  var product = xB + yB;

/*  for (var i = x; i < y; i++) {
    product = product + i;
  }*/
  console.log("xB: ", xB, "yB: ", yB);
  return product;
  // return product;

};

var divide = function(x, y) {
  // TODO: should return the product of x * y
};

var modulo = function(x, y) {
  // TODO: should return the remainder of x / y
};

  // TODO: should return the remainder of x / y
console.log(multiply(3,2));