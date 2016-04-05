var range = function(startIndex, StopIndex) {

  var index = 0;
  var output = [];

  var subroutine = function() {
    console.log(output, index)

    if (index === (StopIndex - startIndex) - 1) {
      return
    } else {
      index++
      output.push(startIndex+index);
    }

    subroutine();
  }

  subroutine()
  return output;

}

var a = range(2,9);

console.log(a);