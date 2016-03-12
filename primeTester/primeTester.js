/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  if(typeof n !== 'number' || n < 1 || n % 1 !== 0){
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }

  var primeNumber = true;

  for (var i = 2; i < n; i++) {
  	if (n % i === 0) {
  		primeNumber = false;
  	}
  }
  // console.log(primeNumber);
  return primeNumber;

  // TODO: return true if n is prime, false otherwise
};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieve = function (start, end) {

	var resultArray = [];
  var counter = 0;

	if(typeof start !== 'number' || start < 1 || start % 1 !== 0){
    // n isn't a number or n is less than 1 or n is not an integer
    	return false;
    }

    // We want to write a for loop that iterate from the starting number to the end number
    // For each value in the range, we want to determine if it is a prime number.
    // If it is a prime number we can push it into our results Array
    // And then we can increment the start number to do the same prime Number Test on the next Number


	for (var i = start; i < end; i++) {

		if (primeTester(start)) {
			 resultArray.push(start);
       counter++;
    }
		start++
	}
	console.log("Total: ", counter, " ", resultArray);
};

primeTester(23);
primeSieve(2,15000);
//Output //[ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]
