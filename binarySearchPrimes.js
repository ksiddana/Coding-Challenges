var primes = [2, 3, 5, 7, 10, 11, 12, 13, 17, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];


// Objective is to find 67, return the index of 67

var binarySearch = function(target) {

// Let min = 0 and max = n-1.
var min = 0;
var max = primes.length - 1;
var guess;

  // If max < min, then stop: target is not present in array. Return -1.
  while(min <= max) {

    // Compute guess as the average of max and min, rounded down (so that it is an integer).
    guess = Math.floor((min + max)/2);
    console.log("min:" + min + " max: " + max + " guess: " + guess);

    // If array[guess] equals target, then stop. You found it! Return guess.
    if (primes[guess] === target) {
      console.log(guess);
      return primes.indexOf(guess);
    }
    // If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
    else if (primes[guess] < target) {
      min = guess + 1;
    } else {
      // Otherwise, the guess was too high. Set max = guess - 1.
      max = guess - 1;
    }

  // Go back to step 2.
  }

  // console.log(guess);
  return -1;
}

binarySearch(10);


