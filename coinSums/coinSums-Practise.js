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

var coins = [1,2,5]; 
// var coins = [200, 100, 50, 20, 10, 5, 2, 1];

var makeChange = function(target) {
  
  var sumOfChange = 0;
  var output = {};
  var currentChain = [];
  var danger = 0;

  var add = function(subTotalCoins) {
    var sum = 0
    for (var i = 0; i < subTotalCoins.length; i++) {
      sum = sum + subTotalCoins[i]
    }
    return sum
  }

  var subroutine = function() {

    // if(danger > 50) {
    //   console.log("DANGER");
    //   return;
    // }
    // danger++;
    console.log("currentChain: ", currentChain);

    // Base Case
    // If the sum of the coins equals the target
    if (add(currentChain) === target) {
      output[currentChain.slice()] = true;
      return;
    }

    if (add(currentChain) > target) {
      return;
    }

    for (var i = 0; i < coins.length; i++) {

      // Prep for dive
      currentChain.push(coins[i])

      // Dive
      subroutine()

      // clean up when you come out of recursion
      currentChain.pop();
    }

  }

  subroutine();
  return output;


}

console.log(makeChange(5));

  

