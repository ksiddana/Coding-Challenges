/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

//Prep for Dive

//Dive

//Clean up after Dive

// take a simple example, for making a 5 pence using [1,2]
// [1,1,1,1,1], [2, 2, 1]
// Output of the function is a number.
// function recurse (index, remainder)


/*var makeChange = function(total, coins){

var output = [];
// var remainingDenominations = inputs.slice(0, inputs.indexOf(total) + 1);
// var coins = [1,2,5,10,20,50,100,200];
var sumOfChange = 0;
var combinations = [];
var counter = 0;

  var recurse = function(index, remainder) {
    var coin = coins[index];

      // Start with the largest Coin, 
      // Base case, if you've reached the index 0, you know you've reached
      if ( index === 0) {
        if (remainder % coin === 0) {
          counter++
          return
        }
      }

      while (remainder >= 0) {
        recurse(index-1, remainder);
        remainder -= coin;
      } 

  }

  recurse(coins.length-1, total)

console.log(counter);
return counter

};*/
var coins = [1,2,5,10,20,50,100,200]; 
// var coins = [200, 100, 50, 20, 10, 5, 2, 1];

var makeChange = function(target) {
  
  var sumOfChange;
  var output = {};
  var subTotal = [];

  var add = function(array) {
    var sum = 0;
    for (var i = 0 ; i < array.length; i++){

    sum += array[i];
    }
    return sum;
  }

  var recursiveMakeChangeFunction = function() {
    
    // Base case
    if (add(subTotal) === target) {
      console.log("*************START**************\n",output);
      output[subTotal.slice()] = true;
      return;
    }

    if (add(subTotal) > target) {
      return;
    }

    // Depth first Search
    for (var i = 0; i < coins.length; i++) {
      
      // Push the data into a storage
      subTotal.push(coins[i]);
      recursiveMakeChangeFunction();
      console.log("------------OUT OF RECURSION------------");

      // You want to reduce the size of the array everytime, you return from
      // the recursion.
      // console.log(subTotal);
      subTotal.pop();
    }
    
  }

  recursiveMakeChangeFunction();
  // console.log(output);
  // console.log(output.length);
}

makeChange(5);

  
/*  var recursiveMakeChangeFunction = function(array, count) {
    // Base case for the dive
    // I don't want to recurse anymore, when my length of combinations are 0
    // A base case is a trivial result that requires no recursion
    console.log("remainingDenominations ", remainingDenominations);

      if (array.length === 1) {
        combinations[array] = count;
        return;
      }


      for (var i = 0; i < inputs.length; i++ ) {
        combinations[inputs[i]] += 
      }

        // Dive
        recursiveMakeChangeFunction(sumOfChange);
  }
  // Inital value to send for Recursion
  recursiveMakeChangeFunction(inputs);
  return output*/


// makeChange(10, [1,2,5,10,20,50,100,200]);
