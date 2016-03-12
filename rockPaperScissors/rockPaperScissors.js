/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function () {
  // TODO: your solution here
  // Lets make a random choice for the computer using Math.random and Math.Floor
  var output = [];
  var inputs = ["rock", "paper", "scissors"];

  // Iterate over the inputs
  // For each input we want to find every other combination that can be the outcome
  // Therefore we need another loop for this condition
  // finally, we want to do this entire operation for 3 rounds. First try to get it to work for 
  // one round and then you can put a loop around the entire code, for multiple arounds.

  /* For 1 Round the following should look like this:
	  
	 Iteration 1: Rock - R
	 Iteration 2: Rock - 	P
	 Iteration 3: Rock - 	   	S

	 Iteration 4: Paper - R
	 Iteration 5: Paper - 	P
	 Iteration 6: Paper - 	   	S

	 Iteration 7: Scissors - R
	 Iteration 8: Scissors - 	P
	 Iteration 9: Scissors - 		S
	  	
  */

/*
  	for (var i = 0; i < inputs.length; i++) {
  		for (var j = 0; j < inputs.length; j++) {
  			for (var k = 0; k < inputs.length; k++) {
  				output.push([inputs[i], inputs[j], inputs[k]]);	
  			}
  		}
  	}

  console.log(output);

};


rockPaperScissors();*/
};


var rockPaperScissors = function(rounds) {

	var output = [];
	var input = ["rock", "paper", "scissors"];
	var aRound = [];

	// We want to store our values in output
	// Start recursion that takes in the rounds
	// 

	// Pass in rounds, what is the base case?
	// If we have 0 or more rounds to play stop
	var recursiveCall = function(rounds, aRound) {
	// if rounds > 0 
		if (rounds > 0) {

			for (var i = 0; i < input.length; i++) {
				output.push(input[i]);
				
				// Update the value of rounds so we can reach its base case for returning from the loop
				// rounds--
				if (aRound.length === round) {
					output.push(aRound.pop());
					return;
				}
				recursiveCall(rounds, aRound);
			}
		}
	}
	recursiveCall(rounds);
	console.log(output);
};

rockPaperScissors(2);
