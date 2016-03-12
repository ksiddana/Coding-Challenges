/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Example:
*   [
*     [ // one possible three round game outcome
*       'rock',    // round 1
*       'paper',   // round 2
*       'scissors' // round 3
*     ],
*     [ // next possible three round game outcome
*       'rock',    // round 1
*       'paper',   // round 2
*       'rock'     // round 3
*     ],
*   etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

// 

var rockPaperScissors = function () {
  // TODO: your solution here
  var inputs = ['rock', 'paper', 'scissors']
  var output = [];
  var currentRound = [];

  var recursiveCall = function(roundsToGo) {

    if (roundsToGo === 0) {
      output.push(currentRound.slice())
      return;
    }

    for (var i = 0; i < inputs.length; i++) {
      currentRound.push(inputs[i]);
      recursiveCall(roundsToGo - 1);
      currentRound.pop();
    };

  }

  recursiveCall(3);
  console.log(output);
  return output;

};

rockPaperScissors();
