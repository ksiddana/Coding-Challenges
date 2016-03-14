/*
data:
3
100 8
15 245
1945 54

answer:
108 260 1999
*/

var sumInLoop = function(stirng) {
  console.log(string);

  var output = string.split('\n');
  console.log(output);

  var rows = output[0];
  var result = [];

  for (var i = 1; i < output.length; i++) {
    var line = output[i].split(' ');
    var sum = parseInt(line[0]) + parseInt(line[1]);
    result.shift();
    result.push(sum);
  }

  console.log(result.join(" "));
}

var string = "3\n100 8\n15 245\n1945 54";
sumInLoop(string);