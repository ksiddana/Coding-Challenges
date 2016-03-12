/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  // Your code here
  var gcd = 1;

  var digits = number.toString().split(".");

  var denominator = 1
  if (number < 0) {
    return '-' + toFraction(-number)
  } else {
    while(number % 1 !== 0) {
      number = number * 10;
      denominator = denominator * 10;

    }
  }

  for (var i = number; i > 0; i--) {
    if (denominator % i === 0 && number % i === 0) {
      gcd = i;
      console.log(gcd);
      break;
    }
  }

  return number/gcd + '/' + denominator/gcd;
  // console.log(denominator, number);
};

console.log(toFraction(0.025));