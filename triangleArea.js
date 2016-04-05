var lengths = [5,6,7];

var areaOfTriangle = function(lengths) {

  // Hernon's formula
  // A = sqrt(semi-perimeter * (semi-perimeter - a) * (semi-perimeter - b ) * (semi-perimeter - c))

}

var leapYear = function(year) {

  if (year % 100 === 0) {

    if (year % 400 === 0) {

      if (year % 4 === 0) {
            return true
      }
    }
  } 

  return false


}

console.log(leapYear(2000))

var combinations = function(string) {

  var output = [];
  var result = [];

  var subroutine = function() {

    console.log(output);
    result.push(output.join(""));   
    
    // Base case
    if (output.length === string.length) {
      return
    }
    // console.log(output, result)


    for (var i = 0; i < string.length; i++) {

      // Prep before you dive
      output.push(string[i])

      // Recurse
      subroutine();

      // Clean up
      output.pop();

    }
  }

    subroutine();
    return result;
  }

// console.log(combinations('dog'));

string = 'dog'
var output = []

for (var i = 0; i < string.length; i++) {
  var word = [string[i]];
  var temp = string[i];
  
  for (var j = 0; j < i; j++) {
    temp = temp + string[j]

    console.log(temp);
  }
}

var combinations2 = function (string)
{
    var result = [];

    var loop = function (start,depth,prefix)
    {
        for(var i=start; i<string.length; i++)
        {
            var next = prefix+string[i];

            console.log(next);

            if (depth > 0)
                loop(i+1,depth-1,next);
            else
                result.push(next);
        }
    }

    for(var i = 0; i< string.length; i++)
    {
        loop(0,i,'');
    }

    return result;
}

// console.log(combinations2('dog'));

// console.log(output);


var xor = function(a,b) {

  if (a === b) {
    return false;
  }

  if (a !== b) {
    return true;
  }
}

// console.log()



function multiply(x) {
    return function(y) {
        return function(z) {
          var z = this.z
          return x * y * z;
        }
    }
}

var obj = {z: 16};

console.log(multiply(2)(3)(4));

console.log(multiply(2)(3).call(obj));