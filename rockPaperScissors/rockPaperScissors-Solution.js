var rockPaperScissors = function(rounds) {

	var output = [];
	var input = ["rock", "paper"];
	var roundsToGo = [];
	var playedSoFar = [];

	// We want to store our values in output
	// Start recursion that takes in the rounds
	// 

	// Pass in rounds, what is the base case?
	// If we have 0 or more rounds to play stop
	var recursiveCall = function(roundsToGo) {
	// if rounds > 0 
		if (roundsToGo === 0) {
			
			output.push(playedSoFar.slice());
			return;
		}

		for (var i = 0; i < input.length; i++) {
			
			playedSoFar.push(input[i]);

			recursiveCall(roundsToGo - 1);
			
			playedSoFar.pop();
		};
	}
	recursiveCall(rounds);
	
	console.log(output);
	return output;
};

rockPaperScissors(2);
