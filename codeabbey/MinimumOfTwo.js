/*

data:
3
5 3
2 8
100 15

answer:
3 2 15

Find the minimum of the 2 numbers in a row

*/

var minimumOfTwo = function(string) {

  var output = string.split("\n");
  var rows = output[0]
  var result = []

  console.log(output);

  for (var i = 1; i < output.length; i++) {
    var line = output[i].split(' ');

    if (parseInt(line[0]) < parseInt(line[1])) {
      result.push(line[0])
    } else {
      result.push(line[1])
    }
  }
  console.log(result);
  return result;
}

var string = "3\n5 3\n2 8\n100 15"
minimumOfTwo(string);
